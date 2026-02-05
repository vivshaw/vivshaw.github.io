/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // allow PostCSS at-rules (@mixin, @define-mixin, etc.)
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin", "define-mixin"],
      },
    ],

    // allow CSS Modules :global() pseudo-class
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],

    // disable nesting rules that conflict with PostCSS mixins
    "no-descending-specificity": null,
    "nesting-selector-no-missing-scoping-root": null,

    // allow rgba() alongside rgb() - both are valid
    "color-function-alias-notation": null,

    // allow deprecated but still-functional values
    "declaration-property-value-keyword-no-deprecated": null,

    // allow duplicate selectors (common pattern for :root with @mixin)
    "no-duplicate-selectors": null,

    // naming patterns - allow any casing
    "custom-property-pattern": null,
    "keyframes-name-pattern": null,
    "selector-class-pattern": null,

    // allow empty CSS files
    "no-empty-source": null,

    // disable opinionated modern syntax rules - keep existing style
    "color-function-notation": null,
    "alpha-value-notation": null,
    "media-feature-range-notation": null,
    "import-notation": null,
    "color-hex-length": null,

    // allow existing keyword casing (currentColor, font names, etc.)
    "value-keyword-case": null,

    // allow quotes around font-family names
    "font-family-name-quotes": null,

    // disable empty line rules - let Prettier handle formatting
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,

    // allow longhand properties (more explicit)
    "declaration-block-no-redundant-longhand-properties": null,

    // comment formatting
    "comment-whitespace-inside": "always",

    // keep useful rules
    "length-zero-no-unit": true,
    "declaration-block-no-duplicate-custom-properties": true,
  },
  ignoreFiles: [
    "**/node_modules/**",
    "**/.next/**",
    "**/out/**",
    "**/dist/**",
    "**/storybook-static/**",
  ],
}
