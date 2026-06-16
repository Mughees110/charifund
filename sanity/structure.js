const singletonTypes = new Set([
  "siteSettings",
  "homepage",
  "pageAbout",
  "pageVolunteer",
  "pageDonate",
  "pageContact",
  "pageComingSoon",
]);

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.divider(),
      S.listItem()
        .title("Causes")
        .child(S.documentTypeList("cause").title("Causes")),
      S.listItem()
        .title("Blog Posts")
        .child(S.documentTypeList("post").title("Blog Posts")),
      S.listItem()
        .title("Events")
        .child(S.documentTypeList("event").title("Events")),
      S.listItem()
        .title("Team Members")
        .child(S.documentTypeList("teamMember").title("Team Members")),
      S.listItem()
        .title("Products")
        .child(S.documentTypeList("product").title("Products")),
      S.divider(),
      S.listItem()
        .title("Partners")
        .child(S.documentTypeList("partner").title("Partners")),
      S.listItem()
        .title("Testimonials")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      S.listItem()
        .title("FAQs")
        .child(S.documentTypeList("faq").title("FAQs")),
      S.listItem()
        .title("Gallery")
        .child(S.documentTypeList("galleryImage").title("Gallery")),
      S.listItem()
        .title("Services")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Stats")
        .child(S.documentTypeList("stat").title("Stats")),
      S.divider(),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("pageAbout").documentId("pageAbout")),
      S.listItem()
        .title("Volunteer Page")
        .child(
          S.document().schemaType("pageVolunteer").documentId("pageVolunteer")
        ),
      S.listItem()
        .title("Donate Page")
        .child(S.document().schemaType("pageDonate").documentId("pageDonate")),
      S.listItem()
        .title("Contact Page")
        .child(
          S.document().schemaType("pageContact").documentId("pageContact")
        ),
      S.listItem()
        .title("Coming Soon Page")
        .child(
          S.document().schemaType("pageComingSoon").documentId("pageComingSoon")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId())
      ),
    ]);
