const { colors, misc } = require("../variables");

module.exports = () => {
  return {
    ".sw-block-field__block": {
      border: `1px solid ${colors["color-steam-cloud"]}`,
      borderRadius: misc["border-radius-default"],
      overflow: "hidden",
    },

    "input, select, textarea": {
      display: "block",
      width: "100%",
      minWidth: "0",
      padding: "12px 16px",
      border: "none",
      background: `${colors["color-white"]}`,
      fontSize: misc["font-size-small"],
      fontFamily: misc["font-family-default"],
      lineHeight: "22px",
      transition: misc["sw-field-transition"],
      color: `${colors["color-gutenberg"]}`,
      outline: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",

      "&:invalid": {
        boxShadow: "none",
      },

      "&:disabled": {
        background: `${colors["color-light-gray"]}`,
        borderColor: `${colors["color-steam-cloud"]}`,
        cursor: "default",
      },
    },

    "&.has--error": {
      ".sw-block-field__block": {
        borderColor: `${colors["color-crimson"]}`,
      },
    },

    "&.sw-field--small": {
      marginBottom: "0",

      "input, textarea, select": {
        padding: "4px 16px",
      },
    },

    "&.sw-field--medium": {
      marginBottom: "6px",

      "input, textarea, select": {
        padding: "8px 16px",
      },
    },
  };
};
