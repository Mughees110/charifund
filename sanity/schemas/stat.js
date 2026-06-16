export default {
  name: "stat",
  title: "Stat",
  type: "document",
  fields: [
    { name: "label", title: "Label", type: "string" },
    { name: "value", title: "Value", type: "number" },
    { name: "suffix", title: "Suffix (+, %, k, etc.)", type: "string" },
    { name: "prefix", title: "Prefix ($, etc.)", type: "string" },
    { name: "order", title: "Sort Order", type: "number" },
  ],
};
