import { imageField } from "./fields";

export default {
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    imageField("logo", "Logo"),
    { name: "url", title: "Website URL", type: "url" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
