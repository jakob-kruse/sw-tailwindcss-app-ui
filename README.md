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

- [Button](#button)
- [Input](#input)

### Button

### Code

```
<div class="sw-button sw-button--primary">Accept</div>
<div class="sw-button sw-button--ghost">Decline</div>
```

---

#### Resul

![Button Demo](../assets/button-demo.png?raw=true)

### Input

### Code

```
<div class="sw-field sw-block-field">
    <div class="sw-field__label">
        <label for="sw-field--example">Title</label>
    </div>
    <div class="sw-block-field__block">
        <input
            type="text"
            name="sw-field--example"
            placeholder="Example Field"/>
    </div>
</div>
```

---

#### Result

![Input Demo](../assets/input-demo.png?raw=true)
