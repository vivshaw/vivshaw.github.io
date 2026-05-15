/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    // allow PostCSS at-rules
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin", "define-mixin", "mixin-content"],
      },
    ],

    // allow CSS Modules `:global()` pseudo-class
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],

    // enforce camelCase class names
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",

    // use bare-string @import syntax (functionally identical to `url()`)
    "import-notation": "string",

    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
        // this is the CSS Color 4 color-space identifier used in color-mix(), which collides
        // with the SVG sRGB keyword.
        ignoreKeywords: ["srgb"],
        // some of the font families are titled with capitals
        ignoreProperties: [
          "font-family",
          "/^--basalt-font-(serif|sans|monospace)$/",
        ],
      },
    ],

    // allow longhand properties (more explicit, sometimes)
    "declaration-block-no-redundant-longhand-properties": null,

    // comment formatting
    "comment-whitespace-inside": "always",
  },
  overrides: [
    {
      // mixins.css uses bare `&` selectors inside @define-mixin bodies; they
      // resolve against the consumer's parent rule once postcss-mixins expands them
      files: ["packages/basalt/css/mixins.css"],
      rules: {
        "nesting-selector-no-missing-scoping-root": null,
      },
    },
  ],
  ignoreFiles: [
    "**/node_modules/**",
    "**/.next/**",
    "**/out/**",
    "**/dist/**",
    "**/storybook-static/**",
  ],
}
