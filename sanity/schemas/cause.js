import { imageField, slugField } from "./fields";

export default {
  name: "cause",
  title: "Cause",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    slugField("title"),
    imageField("image", "Cover Image"),
    { name: "category", title: "Category", type: "string" },
    { name: "excerpt", title: "Short Description", type: "text" },
    { name: "goal", title: "Goal Amount", type: "number" },
    { name: "raised", title: "Raised Amount", type: "number" },
    { name: "date", title: "Date", type: "date" },
    { name: "location", title: "Location", type: "string" },
    { name: "body", title: "Full Story", type: "array", of: [{ type: "block" }] },
    { name: "summary", title: "Summary", type: "text" },
    {
      name: "checklist",
      title: "Checklist Items",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [imageField()],
    },
    { name: "featured", title: "Featured on Homepage", type: "boolean" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
  orderings: [
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
};
