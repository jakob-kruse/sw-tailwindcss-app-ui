module.exports = function ({ addComponents, theme }) {
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
};
