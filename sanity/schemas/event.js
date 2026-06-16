import { imageField, slugField } from "./fields";

export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    slugField("title"),
    imageField("image", "Cover Image"),
    { name: "date", title: "Event Date", type: "datetime" },
    { name: "location", title: "Location", type: "string" },
    { name: "excerpt", title: "Short Description", type: "text" },
    { name: "body", title: "Full Description", type: "array", of: [{ type: "block" }] },
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [imageField()],
    },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
