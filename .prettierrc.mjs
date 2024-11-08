/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 100,
  trailingComma: "all",
  semi: false,
  tabWidth: 2,
  arrowParens: "avoid",
}
