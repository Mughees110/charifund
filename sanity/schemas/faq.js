export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() },
    { name: "answer", title: "Answer", type: "text" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
