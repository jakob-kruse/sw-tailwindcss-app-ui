const { colors, misc } = require("../variables");

const baseButton = {
  margin: 0,
  cursor: "pointer",
  fontSize: misc["font-size-default"],
  fontFamily: misc["font-family-default"],
  verticalAlign: "middle",
  textOverflow: "ellipsis",
  textDecoration: "none",
  whiteSpace: "nowrap",
  userSelect: "none",
  lineHeight: "36px",
  padding: "2px 24px",
  transition: colors["sw-button-transition"],
  borderRadius: misc["border-radius-default"],
  border: `1px solid ${colors["gray-400"]}`,
  backgroundColor: colors["gray-50"],

  "&:hover": {
    backgroundColor: colors["gray-100"],
  },

  "&:disabled": {
    color: colors["gray-500"],
    borderColor: colors["gray-200"],
    cursor: "not-allowed",
  },

  "&:active": {
    backgroundColor: colors["gray-200"],
    borderColor: colors["gray-400"],
  },
};

const buttonComponent = {
  ...baseButton,

  // Primary Button
  "&--primary": {
    ...baseButton,

    color: colors["white"],
    backgroundColor: colors["shopware-brand-500"],
    border: "0 none",

    "&:hover": {
      backgroundColor: colors["shopware-brand-700"],
    },

    "&:active": {
      backgroundColor: colors["shopware-brand-800"],
    },

    "&:disabled, &--disabled": {
      backgroundColor: colors["shopware-brand-200"],
    },
  },

  // Danger Button
  "&--danger": {
    ...baseButton,

    color: colors["white"],
    backgroundColor: colors["crimson-500"],
    border: "0 none",

    "&:hover": {
      backgroundColor: colors["crimson-700"],
    },

    "&:active": {
      backgroundColor: colors["crimson-800"],
    },

    "&:disabled, &--disabled": {
      backgroundColor: colors["crimson-200"],
    },
  },
};

module.exports = (modification = {}) => {
  return Object.assign(buttonComponent, modification);
};
