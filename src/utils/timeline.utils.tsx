import type {
  TimelineDate,
  TimelineDefinition,
  TimelineSlide,
} from "@knight-lab/timelinejs";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Grid } from "../components/Grid/Grid";
import { Tags } from "../components/Tags/Tags";
import { DateString } from "../types/DateString";
import { EventItemType } from "../types/EventItemType";
import { Media } from "../types/H5P/Media";
import { ParamsData } from "../types/ParamsData";
import { SlideType } from "../types/SlideType";
import { isDefined } from "./is-defined.utils";

export const isDateString = (str: string): str is DateString => {
  const matches = str.match(/^-?\d{1,}((-\d{1,2})?(-\d{1,2})?)$/gi);

  return !!matches && matches.length > 0;
};

export const parseDateString = (dateString: DateString): TimelineDate => {
  const isNegativeYear = dateString.startsWith("-");
  let year: string;
  let month: string;
  let day: string;

  if (isNegativeYear) {
    [, year, month, day] = dateString.split("-");
  } else {
    [year, month, day] = dateString.split("-");
  }

  const ret: TimelineDate = {
    year: Number.parseInt(year, 10) * (isNegativeYear ? -1 : 1),
  };

  if (month) {
    ret.month = Number.parseInt(month, 10);
  }

  if (day) {
    ret.day = Number.parseInt(day, 10);
  }

  return ret;
};

export const parseDate = (dateString: string): TimelineDate | null => {
  const dateMillis = Date.parse(dateString);
  const isValid = !Number.isNaN(dateMillis);
  if (!isValid) {
    return null;
  }

  const isDateStr = isDateString(dateString);
  if (isDateStr) {
    return parseDateString(dateString);
  }

  const date = new Date(dateMillis);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
};

const getMedia = (
  eventItem: EventItemType<SlideType>,
): string | Media | undefined => {
  let media;

  switch (eventItem.mediaType) {
    case "image":
      media = eventItem.image;
      break;
    case "video":
      media = eventItem.video;
      break;
    case "custom":
      media = eventItem.customMedia;
      break;
  }

  return media;
};

export const mapEventToTimelineSlide = (
  event: EventItemType<SlideType>,
): TimelineSlide | null => {
  const startDate = event.startDate ? parseDate(event.startDate) : null;
  // const invalidStartDate = event.
  // const invalidEndDate = (event.endDate && parseDate(event.endDate)) === null;

  // if (!startDate) {
  //   console.error("Invalid start date", event.startDate);

  //   return null;
  // }

  // if (invalidEndDate) {
  //   console.error("Invalid end date", event.endDate);

  //   return null;
  // }

  let text;
  const eventHasCustomLayout = event.layout === "custom";
  if (eventHasCustomLayout) {
    text = renderToStaticMarkup(<Grid eventItem={event} />);
  } else {
    let tagsMarkup = "";

    // TODO: Make a variable `hasTags` for this ugly if when TypeScript supports it
    if ("tags" in event && event.tags && event.tags.length > 0) {
      // Has tags
      tagsMarkup = renderToStaticMarkup(
        <div className="h5p-tl-tags-container">
          <Tags tags={event.tags} />
        </div>,
      );
    }

    text = `${event.description}${tagsMarkup}`;
  }

  // The `layout-x` part of this ID is used for styling and must not be removed
  // before we find another way to change slide layouts
  const id = `${event.id}_layout-${event.layout}`;

  const slide: TimelineSlide = {
    unique_id: id,
    start_date: startDate ?? undefined,
    text: {
      headline: event.title,
      text,
    },
  };

  const endDate = event.endDate && parseDate(event.endDate);
  if (endDate) {
    slide.end_date = endDate;
  }

  const media = getMedia(event);
  if (media) {
    slide.media = {
      url: typeof media === "string" ? media : media.path,
    };
  }

  return slide;
};

export const createTimelineDefinition = (
  title: string,
  data: ParamsData,
): TimelineDefinition => {
  const items = data.timelineItems ?? [];

  const events = items.map(mapEventToTimelineSlide).filter(isDefined);

  return {
    title: {
      text: {
        text: title,
      },
    },
    eras: [],
    events,
  };
};