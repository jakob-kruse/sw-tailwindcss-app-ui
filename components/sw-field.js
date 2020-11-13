const { colors, misc } = require("../variables");

const fieldComponent = {
  width: "100%",
  marginBottom: "32px",

  "& > input": {
    display: "block",
    width: "100%",
    border: `1px solid ${colors["steam-cloud"]}`,
    borderRadius: misc["border-radius-default"],
    overflow: "hidden",
    padding: "12px 16px",
    background: colors["white"],
    fontSize: misc["font-size-small"],
    fontFamily: misc["font-family-default"],
    lineHeight: "22px",
    transition: misc["sw-field-transition"],
    color: colors["gutenberg"],
    outline: "none",

    "&:disabled": {
      background: `${colors["light-gray"]}`,
      borderColor: `${colors["steam-cloud"]}`,
    },
  },

  "& > .sw-field__label": {
    display: "flex",
    fontFamily: misc["font-family-default"],
    webkitFontSmoothing: "antialiased",
    flexGrow: 1,
    color: colors["darkgray-200"],
    lineHeight: "16px",
    fontSize: misc["font-size-small"],
    marginBottom: "8px",
    padding: 0,
  },
};

module.exports = (modification = {}) => {
  return Object.assign(fieldComponent, modification);
};
