const { colors, misc } = require("../variables");

const fieldComponent = {
  width: "100%",
  marginBottom: "32px",

  "& > input": {
    display: "block",
    width: "100%",
    border: `1px solid ${colors["color-steam-cloud"]}`,
    borderRadius: misc["border-radius-default"],
    overflow: "hidden",
    padding: "12px 16px",
    background: colors["color-white"],
    fontSize: misc["font-size-small"],
    fontFamily: misc["font-family-default"],
    lineHeight: "22px",
    transition: misc["sw-field-transition"],
    color: colors["color-gutenberg"],
    outline: "none",

    "&:disabled": {
      background: `${colors["color-light-gray"]}`,
      borderColor: `${colors["color-steam-cloud"]}`,
    },
  },

  "& > .sw-field__label": {
    display: "flex",
    fontFamily: misc["font-family-default"],
    webkitFontSmoothing: "antialiased",
    flexGrow: 1,
    color: colors["color-darkgray-200"],
    lineHeight: "16px",
    fontSize: misc["font-size-small"],
    marginBottom: "8px",
    padding: 0,
  },
};

module.exports = (modification = {}) => {
  return Object.assign(fieldComponent, modification);
};
