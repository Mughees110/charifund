const imageField = (name = "image", title = "Image") => ({
  name,
  title,
  type: "image",
  options: { hotspot: true },
});

const slugField = (source = "title") => ({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source, maxLength: 96 },
  validation: (Rule) => Rule.required(),
});

const sectionHeaderFields = [
  { name: "subTitle", title: "Sub Title", type: "string" },
  { name: "title", title: "Title", type: "string" },
  { name: "highlight", title: "Highlighted Word", type: "string" },
  { name: "description", title: "Description", type: "text" },
];

export { imageField, slugField, sectionHeaderFields };
