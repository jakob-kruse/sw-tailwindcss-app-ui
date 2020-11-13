let colors = {
  "menu-start": "#303a4f",
  "menu-end": "#2a3345",
  white: "#fff",
  black: "#000",

  "gray-50": "#f9fafb",
  "gray-100": "#f0f2f5",
  "gray-200": "#e0e6eb",
  "gray-300": "#d1d9e0",
  "gray-400": "#c2ccd6",
  "gray-500": "#b3bfcc",
  "gray-600": "#a3b3c2",
  "gray-700": "#94a6b8",
  "gray-800": "#8599ad",
  "gray-900": "#758ca3",

  "darkgray-50": "#667f99",
  "darkgray-100": "#5c738a",
  "darkgray-200": "#52667a",
  "darkgray-300": "#47596b",
  "darkgray-400": "#3d4c5c",
  "darkgray-500": "#33404d",
  "darkgray-600": "#29333d",
  "darkgray-700": "#1f262e",
  "darkgray-800": "#14191f",
  "darkgray-900": "#0a0d0f",

  "shopware-brand-50": "#e3f3ff",
  "shopware-brand-100": "#bae2ff",
  "shopware-brand-200": "#8ccfff",
  "shopware-brand-300": "#5dbbff",
  "shopware-brand-400": "#3badff",
  "shopware-brand-500": "#189eff",
  "shopware-brand-600": "#1596ff",
  "shopware-brand-700": "#118cff",
  "shopware-brand-800": "#0e82ff",
  "shopware-brand-900": "#0870ff",

  "emerald-50": "#e7f9e9",
  "emerald-100": "#c3f1c8",
  "emerald-200": "#9be8a3",
  "emerald-300": "#73de7e",
  "emerald-400": "#55d762",
  "emerald-500": "#37d046",
  "emerald-600": "#31cb3f",
  "emerald-700": "#2ac437",
  "emerald-800": "#23be2f",
  "emerald-900": "#16b320",

  "pumpkin-spice-50": "#fff6ec",
  "pumpkin-spice-100": "#ffe9ce",
  "pumpkin-spice-200": "#ffdbae",
  "pumpkin-spice-300": "#ffcd8e",
  "pumpkin-spice-400": "#ffc275",
  "pumpkin-spice-500": "#ffb75d",
  "pumpkin-spice-600": "#ffb055",
  "pumpkin-spice-700": "#ffa74b",
  "pumpkin-spice-800": "#ff9f41",
  "pumpkin-spice-900": "#ff9030",

  "crimson-50": "#fbe5ea",
  "crimson-100": "#f5bfc9",
  "crimson-200": "#ef94a6",
  "crimson-300": "#e86982",
  "crimson-400": "#e34967",
  "crimson-500": "#de294c",
  "crimson-600": "#da2445",
  "crimson-700": "#d51f3c",
  "crimson-800": "#d11933",
  "crimson-900": "#c80f24",

  "module-yellow-50": "#fffae0",
  "module-yellow-100": "#fff3b3",
  "module-yellow-200": "#ffeb80",
  "module-yellow-300": "#ffe34d",
  "module-yellow-400": "#ffdd26",
  "module-yellow-500": "#ffd700",
  "module-yellow-600": "#ffd300",
  "module-yellow-700": "#ffcd00",
  "module-yellow-800": "#ffc700",
  "module-yellow-900": "#ffbe00",

  "module-orange-50": "#fef1ec",
  "module-orange-100": "#fddcd0",
  "module-orange-200": "#fcc4b1",
  "module-orange-300": "#faac91",
  "module-orange-400": "#f99b7a",
  "module-orange-500": "#f88962",
  "module-orange-600": "#f7815a",
  "module-orange-700": "#f67650",
  "module-orange-800": "#f56c46",
  "module-orange-900": "#f35934",

  "module-pink-50": "#fff0f8",
  "module-pink-100": "#ffdaed",
  "module-pink-200": "#ffc2e1",
  "module-pink-300": "#ffaad4",
  "module-pink-400": "#ff97cb",
  "module-pink-500": "#ff85c2",
  "module-pink-600": "#ff7dbc",
  "module-pink-700": "#ff72b4",
  "module-pink-800": "#ff68ac",
  "module-pink-900": "#ff559f",

  "module-blue-50": "#edfafd",
  "module-blue-100": "#d2f3fb",
  "module-blue-200": "#b5ebf8",
  "module-blue-300": "#97e2f5",
  "module-blue-400": "#80dcf2",
  "module-blue-500": "#6ad6f0",
  "module-blue-600": "#62d1ee",
  "module-blue-700": "#57ccec",
  "module-blue-800": "#4dc6e9",
  "module-blue-900": "#3cbce5",

  "module-purple-50": "#f4f2fd",
  "module-purple-100": "#e3defb",
  "module-purple-200": "#d0c9f8",
  "module-purple-300": "#bdb3f5",
  "module-purple-400": "#aea2f2",
  "module-purple-500": "#a092f0",
  "module-purple-600": "#988aee",
  "module-purple-700": "#8e7fec",
  "module-purple-800": "#8475e9",
  "module-purple-900": "#7363e5",

  "module-green-50": "#ebfaf4",
  "module-green-100": "#cdf4e3",
  "module-green-200": "#abecd1",
  "module-green-300": "#89e4bf",
  "module-green-400": "#70dfb1",
  "module-green-500": "#57d9a3",
  "module-green-600": "#4fd59b",
  "module-green-700": "#46cf91",
  "module-green-800": "#3cca88",
  "module-green-900": "#2cc077",
};

colors = {
  ...colors,
  "shopware-blue": colors["color-shopware-brand-500"],
  biscay: colors["color-menu-end"],
  kashmir: colors["color-darkgray-200"],
  "deep-cove": colors["color-menu-start"],
  iron: colors["color-gray-50"],
  crimson: colors["color-crimson-500"],
  "pumpkin-spice": colors["color-pumpkin-spice-500"],
  contrast: colors["color-module-yellow-500"],
  emerald: colors["color-emerald-500"],
  "cadet-blue": colors["color-shopware-brand-50"],
  gutenberg: colors["color-darkgray-200"],
  "steam-cloud": colors["color-gray-300"],
  "link-water": colors["color-gray-50"],
  "light-gray": colors["color-gray-100"],
  gray: colors["color-gray-700"],
  purple: colors["color-module-purple-900"],
};

const misc = {
  "border-radius-default": "4px",
  "sw-button-transition": "all 0.15s ease-out",
  "border-radius-pill": "100vh",

  "font-family-default":
    "'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  "font-size-default": "16px",
  "font-size-large": "18px",
  "font-size-small": "14px",
  "font-size-extra-small": "12px",
  "font-weight-light": "300",
  "font-weight-regular": "400",
  "font-weight-semi-bold": "600",
  "font-weight-bold": "700",
};

module.exports = {
  colors,
  misc,
};