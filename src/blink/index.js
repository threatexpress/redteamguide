var theme = {
  plain: {
    color: "#e5e7eb",
    backgroundColor: "#011214",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "#4ade80",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#344647",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#4ade80",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#0ae0f0",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#c084fc",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#0ae0f0",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#89a8aa",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#ffb800",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "#01b5c2",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};

export default theme;
