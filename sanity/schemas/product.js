import { imageField, slugField } from "./fields";

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    slugField("title"),
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [imageField()],
    },
    { name: "price", title: "Price", type: "number" },
    { name: "salePrice", title: "Sale Price", type: "number" },
    { name: "category", title: "Category", type: "string" },
    { name: "description", title: "Description", type: "array", of: [{ type: "block" }] },
    { name: "rating", title: "Rating (1-5)", type: "number" },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
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
