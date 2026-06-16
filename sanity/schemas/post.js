import { imageField, slugField } from "./fields";

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    slugField("title"),
    imageField("image", "Featured Image"),
    { name: "category", title: "Category", type: "string" },
    { name: "author", title: "Author", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
