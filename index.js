module.exports = function ({ addComponents }) {
  addComponents({
    ".sw-button": require("./components/sw-button")(),
    ".sw-field": require("./components/sw-field")(),
    ".sw-block-field": require("./components/sw-block-field")(),
  });
};
