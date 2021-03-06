import { H5PField, H5PFieldGroup, H5PFieldList, H5PFieldText } from "h5p-types";
import { layoutOptions } from "./layout.utils";

export const dateDescription =
  "YYYY-MM-DD — only year is required. Years can be negative.";

export const scaleValues = {
  human: {
    label: "Human time",
    value: "human",
  },
  cosmological: {
    label: "Cosmological time",
    value: "cosmological",
  },
  indexed: {
    label: "Indexed",
    value: "index",
  },
};

const createCopyrightField = (name: string): H5PFieldGroup => ({
  label: "Copyright",
  name,
  type: "group",
  widget: "copyright",
  fields: [
    {
      label: "Title",
      name: "title",
      type: "text",
    },
    {
      label: "Author",
      type: "text",
      name: "author",
    },
    {
      label: "Year(s)",
      name: "year",
      type: "text",
    },
    {
      label: "Source",
      name: "source",
      type: "text",
    },
    {
      label: "License",
      type: "select",
      options: [
        {
          label: "Undisclosed",
          value: "U",
        },
        {
          label: "Attribution",
          value: "CC BY",
        },
        {
          label: "Attribution-ShareAlike",
          value: "CC BY-SA",
        },
        {
          label: "Attribution-NoDerivs",
          value: "CC BY-ND",
        },
        {
          label: "Attribution-NonCommercial",
          value: "CC BY-NC",
        },
        {
          label: "Attribution-NonCommercial-ShareAlike",
          value: "CC BY-NC-SA",
        },
        {
          label: "Attribution-NonCommercial-NoDerivs",
          value: "CC BY-NC-ND",
        },
        {
          label: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
          value: "CC0 1.0",
        },
        {
          label: "General Public License",
          value: "GNU GPL",
        },
        {
          label: "Public Domain",
          value: "PD",
        },
        {
          label: "Copyright",
          value: "C",
        },
      ],
      default: "U",
      name: "license",
    },
    {
      label: "License Version",
      name: "version",
      type: "select",
      options: [
        {
          label: "4.0 International",
          value: "4.0",
        },
        {
          label: "3.0 Unported",
          value: "3.0",
        },
        {
          label: "2.5 Generic",
          value: "2.5",
        },
        {
          label: "2.0 Generic",
          value: "2.0",
        },
        {
          label: "1.0 Generic",
          value: "1.0",
        },
      ],
      default: "4.0",
      widget: "NDLAShowWhen",
      showWhen: {
        rules: [
          {
            field: "license",
            equals: [
              "CC BY",
              "CC BY-SA",
              "CC BY-ND",
              "CC BY-NC",
              "CC BY-NC-SA",
              "CC BY-NC-ND",
            ],
          },
        ],
      },
    },
    {
      label: "License Version",
      name: "version",
      type: "select",
      options: [
        {
          label: "Version 3",
          value: "v3",
        },
        {
          label: "Version 2",
          value: "v2",
        },
        {
          label: "Version 1",
          value: "v1",
        },
      ],
      default: "v3",
      widget: "NDLAShowWhen",
      showWhen: {
        rules: [
          {
            field: "license",
            equals: ["GNU GPL"],
          },
        ],
      },
    },
    {
      label: "License Version",
      name: "version",
      type: "select",
      options: [
        {
          label: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
          value: "CC0 1.0",
        },
        {
          label: "Public Domain Mark",
          value: "CC PDM",
        },
      ],
      default: "CC0 1.0",
      widget: "NDLAShowWhen",
      showWhen: {
        rules: [
          {
            field: "license",
            equals: ["PD"],
          },
        ],
      },
    },
  ],
});

export const tagPaletteValues = [
  [
    "#E0E0E0",
    "#F9DCDD",
    "#F8DDC9",
    "#FFF2D6",
    "#D5ECDA",
    "#EBF0FF",
    "#DEEAF7",
    "#C3EBFD",
    "#E8E3F2",
    "#F2E3EB",
  ],
  [
    "#CCCCCC",
    "#F1A7A9",
    "#EEAF81",
    "#FFE5AE",
    "#9DD2A9",
    "#C2D3FF",
    "#9BBEE9",
    "#60CAFB",
    "#C4BADE",
    "#DFB9CC",
  ],
  [
    "#A3A3A3",
    "#E66065",
    "#E4813A",
    "#FED172",
    "#65B877",
    "#7099FF",
    "#5892DA",
    "#10AFF9",
    "#9582C4",
    "#C581A3",
  ],
  [
    "#757575",
    "#cd2026",
    "#B45918",
    "#F2A602",
    "#3D854D",
    "#1d5cff",
    "#2869B8",
    "#057CB3",
    "#674ea7",
    "#a64d79",
  ],
  [
    "#2e2e2e",
    "#8D161A",
    "#6C350F",
    "#A26F02",
    "#275430",
    "#002EA3",
    "#1A4375",
    "#034563",
    "#351c75",
    "#741b47",
  ],
];

export const backgroundPaletteValues = [
  [
    "#757575",
    "#cd2026",
    "#B45918",
    "#3D854D",
    "#1d5cff",
    "#2869B8",
    "#057CB3",
    "#674ea7",
    "#a64d79",
  ],
  [
    "#5c5c5c",
    "#B01C21",
    "#8b4513",
    "#337040",
    "#003ACC",
    "#205493",
    "#04608B",
    "#56418B",
    "#8C4066",
  ],
  [
    "#2e2e2e",
    "#8D161A",
    "#6C350F",
    "#275430",
    "#002EA3",
    "#1A4375",
    "#034563",
    "#351c75",
    "#741b47",
  ],
  [
    "#000000",
    "#6A1114",
    "#48240A",
    "#1A3820",
    "#00237A",
    "#123054",
    "#02293B",
    "#20124d",
    "#4c1130",
  ],
];

export const createTagEditorField = (): H5PFieldGroup => ({
  label: "Tags",
  name: "tags",
  type: "group",
  expanded: false,
  importance: "low",
  fields: [
    {
      label: "Tags",
      name: "tags",
      type: "list",
      min: 0,
      entity: "Tag",
      importance: "low",
      optional: true,
      field: {
        label: "Tag",
        name: "tag",
        importance: "low",
        type: "group",
        fields: [
          {
            label: "Id",
            name: "id",
            type: "text",
            widget: "uuid",
          },
          {
            label: "Name",
            name: "name",
            type: "text",
          },
          {
            label: "Color",
            name: "color",
            type: "text",
            widget: "colorSelector",
            default: tagPaletteValues[0][0],
            spectrum: {
              showPalette: true,
              showPaletteOnly: true,
              palette: tagPaletteValues,
            },
          },
        ],
      },
    },
  ],
});

export const createTagPickerField = (): H5PFieldList => ({
  label: "Tags",
  name: "tags",
  type: "list",
  entity: "Tag",
  importance: "low",
  optional: true,
  min: 0,
  widget: "NDLATagsPicker",
  fieldNameToWatch: "tags",
  field: {
    label: "Tag",
    name: "tag",
    importance: "low",
    type: "group",
    fields: [
      {
        label: "Id",
        name: "id",
        type: "text",
        widget: "uuid",
      },
      {
        label: "Name",
        name: "name",
        type: "text",
      },
      {
        label: "Color",
        name: "color",
        type: "text",
      },
      {
        label: "Is active",
        name: "isActive",
        type: "text",
      },
    ],
  },
});

export const createTimelineItemFields = (
  slideType: "title" | "regular",
): Array<H5PField> => [
  {
    label: "Id",
    name: "id",
    type: "text",
    widget: "uuid",
  },
  {
    label: "Slide type",
    name: "slideType",
    type: "text",
    default: slideType,
    widget: "none",
  },
  {
    label: "Title",
    name: "title",
    type: "text",
  },
  {
    label: "Start date",
    description: dateDescription,
    name: "startDate",
    type: "text",
    optional: slideType === "title",
  },
  {
    label: "End date",
    description: dateDescription,
    name: "endDate",
    type: "text",
    optional: true,
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    widget: "html",
    tags: ["p", "br", "strong", "em", "a"],
  },
  createCopyrightField("descriptionCopyright"),
  {
    label: "Layout",
    name: "layout",
    type: "select",
    default: layoutOptions.textOnRight.value,
    options: Object.values(layoutOptions),
  },
  // {
  //   label: "Event content",
  //   name: "eventContent",
  //   type: "group",
  //   importance: "low",
  //   widget: "NDLATimelineEventLayout",
  //   fields: [
  //     {
  //       label: "Items",
  //       name: "items",
  //       type: "group",
  //       fields: [
  //         {
  //           label: "Id",
  //           name: "id",
  //           type: "text",
  //           widget: "uuid",
  //         },
  //         {
  //           label: "X position",
  //           name: "x",
  //           type: "text",dET
  //           widget: "none",
  //         },
  //         {
  //           label: "Y position",
  //           name: "y",
  //           type: "text",
  //           widget: "none",
  //         },
  //         {
  //           label: "Width",
  //           name: "width",
  //           type: "text",
  //           widget: "none",
  //         },
  //         {
  //           label: "Height",
  //           name: "height",
  //           type: "text",
  //           widget: "none",
  //         },
  //         {
  //           label: "Type",
  //           name: "type",
  //           type: "text",
  //           widget: "none",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Media type",
    name: "mediaType",
    type: "select",
    options: [
      {
        label: "Image",
        value: "image",
      },
      {
        label: "Video",
        value: "video",
      },
      {
        label: "Audio",
        value: "audio",
      },
      {
        label: "External link",
        value: "custom",
      },
      {
        label: "None",
        value: "none",
      },
    ],
    default: "image",
  },
  {
    label: "Image",
    name: "image",
    type: "image",
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "image",
        },
      ],
    },
  },
  {
    label: "Video",
    name: "video",
    type: "video",
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "video",
        },
      ],
    },
  },
  {
    label: "Audio",
    name: "audio",
    type: "audio",
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "audio",
        },
      ],
    },
  },
  {
    label: "External link",
    description:
      'Insert a link to external resources. Certain websites will be rendered as specialized embeds, such as Twitter, YouTube, Wikipedia, and Google Maps. See full list in the <a href="https://timeline.knightlab.com/docs/media-types.html" target="_blank" rel="noopener noreferrer">Knightlab docs</a>',
    name: "customMedia",
    type: "text",
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "custom",
        },
      ],
    },
  },
  ...(slideType === "regular" ? [createTagPickerField()] : []),
  {
    label: "Appearance",
    name: "appearance",
    type: "group",
    importance: "low",
    fields: [
      {
        label: "Background",
        name: "backgroundType",
        type: "select",
        default: "none",
        options: [
          {
            label: "Color",
            value: "color",
          },
          {
            label: "Image",
            value: "image",
          },
          {
            label: "None",
            value: "none",
          },
        ],
      },
      {
        // Only used to keep the number of fields within this group to more than 1
        label: "",
        name: "unused_field",
        type: "text",
        widget: "none",
      },
      {
        label: "Background color",
        name: "backgroundColor",
        type: "text",
        widget: "NDLAShowWhen",
        showWhen: {
          rules: [
            {
              field: "backgroundType",
              equals: "color",
            },
          ],
          widget: "colorSelector",
        },
        default: backgroundPaletteValues[0][0],
        spectrum: {
          showPalette: true,
          showPaletteOnly: true,
          palette: backgroundPaletteValues,
        },
      },
      {
        label: "Background image",
        name: "backgroundImage",
        type: "image",
        widget: "NDLAShowWhen",
        showWhen: {
          rules: [
            {
              field: "backgroundType",
              equals: "image",
            },
          ],
        },
      },
    ],
  },
];

export const createL10nField = (
  label: string,
  name: string,
  defaultValue: string,
  description?: string,
): H5PFieldText => {
  const field: H5PFieldText = {
    label,
    name,
    default: defaultValue,
    type: "text",
  };

  if (description) {
    field.description = description;
  }

  return field;
};
