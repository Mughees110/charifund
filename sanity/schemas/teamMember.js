import { imageField, slugField } from "./fields";

export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
    slugField("name"),
    imageField("image", "Photo"),
    { name: "role", title: "Role", type: "string" },
    { name: "bio", title: "Short Bio", type: "text" },
    { name: "fullBio", title: "Full Bio", type: "array", of: [{ type: "block" }] },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "icon", title: "Icon Class", type: "string" },
          ],
        },
      ],
    },
    {
      name: "progressBars",
      title: "Progress Bars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "percent", title: "Percent", type: "number" },
          ],
        },
      ],
    },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
