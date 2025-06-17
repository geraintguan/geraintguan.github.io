import { persistentAtom } from "@nanostores/persistent";

export type Theme = "dark" | "light";

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
  encode: (value) => value,
});
