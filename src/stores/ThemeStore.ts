import { persistentAtom } from "@nanostores/persistent";

export type Theme = "dark" | "light" | undefined;

export const theme = persistentAtom<Theme>("theme", "light", {
  decode: (value) => {
    if (value !== "dark" && value !== "light") {
      console.warn(
        `Expected value of persistent atom "theme" to be "dark" or "light", but got "${value}", Defaulting to "light"`,
      );
      return "light";
    }

    return value;
  },
  encode: (value) => value ?? "light",
});

export function init() {
  theme.subscribe((value) => {
    if (!value) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      console.log(`No current theme set, using system theme '${systemTheme}'`);

      document.documentElement.setAttribute("data-theme", systemTheme);

      theme.set(systemTheme);
    } else {
      console.log(`Setting theme to '${value}'`);

      document.documentElement.setAttribute("data-theme", value);
    }
  });
}
