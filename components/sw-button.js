const { colors, misc } = require("../variables");

module.exports = () => {
  return {
    border: `1px solid ${colors["color-gray-400"]}`,
    backgroundColor: colors["color-gray-50"],
    transition: colors["sw-button-transition"],
    display: "inline-block",
    borderRadius: misc["border-radius-default"],
    padding: "2px 24px",
    fontSize: "14px",
    lineHeight: "34px",
    outline: "none",
    fontWeight: 600,
    fontFamily: misc["font-family-default"],
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    verticalAlign: "middle",
    textDecoration: "none",
    cursor: "pointer",
    userSelect: "none",
    margin: "0",
    position: "relative",

    ".sw-button__content": {
      display: "grid",
      gridAutoFlow: "column",
      alignItems: "center",
      gridGap: "0 8px",
    },

    "&:hover": {
      backgroundColor: colors["color-gray-100"],
    },

    "&:active": {
      backgroundColor: colors["color-gray-200"],
      borderColor: colors["color-gray-400"],
    },

    "&:disabled": {
      color: colors["color-gray-500"],
      borderColor: colors["color-gray-200"],
      cursor: "not-allowed",
    },

    "&.sw-button--primary": {
      backgroundColor: colors["color-shopware-brand-500"],
      color: colors["color-white"],
      lineHeight: "36px",
      border: "0 none",

      ".sw-icon": {
        color: colors["color-white"],
      },

      "&.sw-button--x-small": {
        lineHeight: "20px",
      },

      "&.sw-button--small": {
        lineHeight: "28px",
      },

      "&.sw-button--large": {
        lineHeight: "44px",
      },

      "&:hover": {
        backgroundColor: colors["color-shopware-brand-700"],
      },

      "&:active": {
        backgroundColor: colors["color-shopware-brand-800"],
      },

      "&:disabled, &.sw-button--disabled": {
        backgroundColor: colors["color-shopware-brand-200"],
      },

      "&.sw-button--square .sw-icon": {
        color: colors["color-white"],
      },
    },

    "&.sw-button--contrast": {
      backgroundColor: colors["color-module-yellow-500"],
      color: colors["color-darkgray-200"],
      lineHeight: "36px",
      border: "0 none",

      ".sw-icon": {
        color: colors["color-darkgray-200"],
      },
      "&.sw-button--x-small": {
        lineHeight: "20px",
      },

      "&.sw-button--small": {
        lineHeight: "28px",
      },

      "&.sw-button--large": {
        lineHeight: "44px",
      },

      "&:hover": {
        backgroundColor: colors["color-module-yellow-700"],
      },

      "&:active": {
        backgroundColor: colors["color-module-yellow-800"],
      },

      "&:disabled, &.sw-button--disabled": {
        backgroundColor: colors["color-module-yellow-200"],
        color: colors["color-gray-800"],

        ".sw-icon": {
          color: colors["color-gray-400"],
        },
      },
    },

    "&.sw-button--danger": {
      backgroundColor: colors["color-crimson-500"],
      color: colors["color-white"],
      lineHeight: "36px",
      border: "0 none",

      ".sw-icon": {
        color: colors["color-white"],
      },

      "&.sw-button--x-small": {
        lineHeight: "20px",
      },

      "&.sw-button--small": {
        lineHeight: "28px",
      },

      "&.sw-button--large": {
        lineHeight: "44px",
      },

      "&:hover": {
        backgroundColor: colors["color-crimson-700"],
      },

      "&:active": {
        backgroundColor: colors["color-crimson-800"],
      },

      "&:disabled, &.sw-button--disabled": {
        backgroundColor: colors["color-crimson-200"],

        ".sw-icon": {
          color: colors["color-white"],
        },
      },
    },

    "&.sw-button--ghost": {
      backgroundColor: "transparent",
      borderColor: colors["color-shopware-brand-500"],
      color: colors["color-shopware-brand-500"],

      ".sw-icon": {
        color: colors["color-shopware-brand-500"],
      },

      "&:hover": {
        backgroundColor: colors["color-shopware-brand-50"],
      },

      "&:active": {
        backgroundColor: colors["color-shopware-brand-100"],
      },

      "&:disabled, &.sw-button--disabled": {
        backgroundColor: "transparent",
        borderColor: colors["color-shopware-brand-200"],
        color: colors["color-shopware-brand-200"],
        ".sw-icon": {
          color: colors["color-shopware-brand-200"],
        },
      },
    },

    "&.sw-button--block": {
      display: "block",
      width: "100%",
    },

    "&.sw-button--x-small": {
      paddingLeft: "10px",
      paddingRight: "10px",
      fontSize: "12px",
      lineHeight: "18px",

      "&.sw-button--square": {
        width: "24px",
      },
    },

    "&.sw-button--small": {
      paddingLeft: "15px",
      paddingRight: "15px",
      fontSize: "12px",
      lineHeight: "26px",

      "&.sw-button--square": {
        width: "32px",
      },
    },

    "&.sw-button--large": {
      paddingLeft: "28px",
      paddingRight: "28px",
      lineHeight: "42px",
      fontSize: "15px",

      "&.sw-button--square": {
        width: "48px",
      },
    },

    "&.sw-button--square": {
      width: "40px",
      paddingLeft: "0",
      paddingRight: "0",
      textAlign: "center",

      ".sw-button__content": {
        display: "inline",
      },
    },
  };
};
