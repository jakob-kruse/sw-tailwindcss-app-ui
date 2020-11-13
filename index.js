const { colors } = require("./variables");

module.exports = function ({ addComponents, addUtilities, theme }) {
  const registerComponent = (componentName) => {
    return {
      [`.${componentName}`]: require(`./components/${componentName}`)(
        theme(componentName)
      ),
    };
  };

  addComponents({
    ...registerComponent("sw-button"),
    ...registerComponent("sw-field"),
  });
  const colorUtilities = {};

  Object.entries(colors).map(([name, color]) => {
    colorUtilities[`.sw-${name}`] = { color };
  });

  addUtilities(colorUtilities);
};
