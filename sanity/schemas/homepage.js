import { imageField, sectionHeaderFields } from "./fields";

const sectionHeaderObject = {
  type: "object",
  fields: sectionHeaderFields,
};

export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "subTitle", title: "Sub Title", type: "string" },
            { name: "title", title: "Title", type: "text" },
            { name: "highlight", title: "Highlighted Text", type: "string" },
            imageField("backgroundImage", "Background Image"),
            {
              name: "primaryCtaLabel",
              title: "Primary CTA Label",
              type: "string",
            },
            {
              name: "primaryCtaLink",
              title: "Primary CTA Link",
              type: "string",
            },
            {
              name: "secondaryCtaLabel",
              title: "Secondary CTA Label",
              type: "string",
            },
            {
              name: "secondaryCtaLink",
              title: "Secondary CTA Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "sections",
      title: "Section Headers",
      type: "object",
      fields: [
        { name: "causes", title: "Causes", ...sectionHeaderObject },
        { name: "blog", title: "Blog", ...sectionHeaderObject },
        { name: "team", title: "Team", ...sectionHeaderObject },
        { name: "events", title: "Events", ...sectionHeaderObject },
        { name: "partners", title: "Partners", ...sectionHeaderObject },
        { name: "testimonials", title: "Testimonials", ...sectionHeaderObject },
        { name: "faq", title: "FAQ", ...sectionHeaderObject },
        { name: "gallery", title: "Gallery", ...sectionHeaderObject },
        { name: "services", title: "Services", ...sectionHeaderObject },
        { name: "community", title: "Community", ...sectionHeaderObject },
        { name: "volunteer", title: "Volunteer", ...sectionHeaderObject },
      ],
    },
  ],
};
