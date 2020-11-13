# Tailwind + Shopware - App UI Kit

This plugin provides the [Shopware 6](https://www.shopware.com/en/) Administration styles in any project that is using [TailwindCSS](https://tailwindcss.com/)

## Installation

`yarn add sw-tailwindcss-app-ui`

or

`npm install sw-tailwindcss-app-ui`

---

### Require it in your `tailwind.config.js`

```
...
plugins: [require("sw-tailwindcss-app-ui")],
...
```

## Usage

This plugin currently only supports the following components:

- [sw-button](#button)
- [sw-field](#input)

### Button

### Code

```
<div class="sw-button">Default Button</div>
<div class="sw-button--primary">Primary Button</div>
```

---

#### Result

![Button Demo](../assets/button-demo.png?raw=true)

### Input

### Code

```
<div class="sw-field">
    <label class="sw-field__label" for="sw-field--example">Label</label>
    <input type="text" name="sw-field--example" placeholder="Example Field" />
</div>
```

---

#### Result

![Input Demo](../assets/input-demo.png?raw=true)


## Extending/Modifying components

To extend components create a new entry in the theme section of your `tailwind.config.js`.

The key should be the component name (e.g "sw-button") and the value should be your modifaction in [CSS-in-JS syntax
](https://tailwindcss.com/docs/plugins#css-in-js-syntax).

### Example: Extending the button component

```
theme: {
    "sw-button": {
        border: "2px red",

        "&:hover": {
            width: "120px",
        },
    },
},
```
