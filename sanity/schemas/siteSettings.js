import { imageField } from "./fields";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "siteName", title: "Site Name", type: "string" },
    imageField("logo", "Logo"),
    imageField("logoLight", "Logo (Light)"),
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "topBarMessage", title: "Top Bar Message", type: "string" },
    { name: "footerDescription", title: "Footer Description", type: "text" },
    { name: "newsletterTitle", title: "Newsletter Title", type: "string" },
    { name: "newsletterDescription", title: "Newsletter Description", type: "string" },
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
      name: "footerLinks",
      title: "Footer Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    },
  ],
};
