import { imageField } from "./fields";

export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text" },
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    imageField("image", "Photo"),
    { name: "rating", title: "Rating", type: "number" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
