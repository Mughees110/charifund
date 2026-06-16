import { imageField } from "./fields";

export default {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    imageField("image", "Image"),
    { name: "caption", title: "Caption", type: "string" },
    { name: "tag", title: "Tag", type: "string" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
