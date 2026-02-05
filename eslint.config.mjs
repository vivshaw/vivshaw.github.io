import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import nextPlugin from "@next/eslint-plugin-next"
import importPlugin from "eslint-plugin-import"
import prettierConfig from "eslint-config-prettier"
import globals from "globals"

export default tseslint.config(
  // global ignores
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/dist/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/.yarn/**",
      "**/public/sw.js",
    ],
  },

  // base JS/TS config
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // global settings for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },

  // React files
  {
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react/prop-types": "off", // TypeScript handles this
      "react/no-unescaped-entities": "off",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // accessibility rules
      ...jsxA11yPlugin.configs.recommended.rules,
    },
  },

  // Next.js app files
  {
    files: ["apps/vivsha.ws/**/*.ts", "apps/vivsha.ws/**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // import sorting for all JS/TS files
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling"],
            "index",
          ],
          pathGroups: [
            {
              pattern: "#*",
              group: "parent",
              position: "before",
            },
            {
              pattern: "#*/**",
              group: "parent",
              position: "before",
            },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ["builtin", "external"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
    },
  },

  // Next.js layout files - allow {} for props (idiomatic Next.js)
  {
    files: ["**/layout.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },

  // test files - relaxed rules
  {
    files: ["**/*.test.*", "**/*.spec.*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Storybook files - relaxed rules
  {
    files: ["**/*.stories.tsx", "**/.storybook/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Basalt components - disable display-name for polymorphic forwardRef components
  {
    files: ["packages/basalt/components/*.tsx"],
    rules: {
      "react/display-name": "off",
    },
  },

  // config files - relaxed rules
  {
    files: ["*.config.*", "*.mjs"],
    rules: {
      "import/order": "off",
    },
  },

  // Prettier must be last to override conflicting rules
  prettierConfig,
)
