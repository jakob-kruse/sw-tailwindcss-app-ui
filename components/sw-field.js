const { colors } = require("../variables");

module.exports = () => {
  return {
    ".sw-field": {
      width: "100%",
      marginBottom: "32px",

      ".sw-field__label": {
        display: "flex",
        lineHeight: "16px",
        fontSize: "14px",
        marginBottom: "8px",
        color: colors["$color-kashmir"],
        label: {
          flexGrow: 1,
        },
      },

      ".sw-field__label": {
        content: '"*"',
        color: colors["color-shopware-brand-500"],
      },

      ".sw-field__button-restore": {
        color: colors["$color-kashmir"],
        padding: "0 8px",
        border: "none",
        background: "none",
        outline: "none",
        MozAppearance: "none",
        WebkitAppearance: "none",
        cursor: "pointer",
      },

      ".sw-field__help-text": {
        alignSelf: "center",
      },

      "&.is--inherited": {
        ".sw-field__label": { color: colors["$color-purple"] },
      },

      "&.has--error": {
        marginBottom: "12px",
      },
    },
  };
};
