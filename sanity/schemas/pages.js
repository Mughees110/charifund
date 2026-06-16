import { sectionHeaderFields } from "./fields";

const makePageSchema = (name, title) => ({
  name,
  title,
  type: "document",
  fields: [
    {
      name: "header",
      title: "Page Header",
      type: "object",
      fields: sectionHeaderFields,
    },
    {
      name: "intro",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    },
    { name: "summary", title: "Summary", type: "text" },
    {
      name: "checklist",
      title: "Checklist",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "notice", title: "Notice Text", type: "text" },
    { name: "mapEmbedUrl", title: "Map Embed URL", type: "url" },
    { name: "launchDate", title: "Launch Date", type: "datetime" },
  ],
});

export const pageAbout = makePageSchema("pageAbout", "About Page");
export const pageVolunteer = makePageSchema("pageVolunteer", "Volunteer Page");
export const pageDonate = makePageSchema("pageDonate", "Donate Page");
export const pageContact = makePageSchema("pageContact", "Contact Page");
export const pageComingSoon = makePageSchema("pageComingSoon", "Coming Soon Page");
