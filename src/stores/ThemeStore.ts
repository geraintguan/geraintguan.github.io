import type { WritableAtom } from "nanostores";

import { persistentAtom } from "@nanostores/persistent";

export type Theme = "dark" | "light" | "unset";

export class ThemeStore {
  public static Instance = new ThemeStore();

  private readonly atom: WritableAtom<Theme>;

  constructor() {
    this.atom = persistentAtom<Theme>("theme", "unset", {
      decode: (value) => {
        if (value !== "dark" && value !== "light") {
          console.warn(
            `Expected value of persistent atom 'theme' to be one of ['dark','light','unset'], but got '${value}', Defaulting to 'unset'`,
          );

          return "unset";
        }

        return value;
      },
      encode: (value) => value,
    });
  }

  registerSubscription(): void {
    this.atom.subscribe((value) => {
      if (value === "unset") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";

        console.log(
          `No current theme set, using system theme '${systemTheme}'`,
        );

        document.documentElement.setAttribute("data-theme", systemTheme);

        this.atom.set(systemTheme);
      } else {
        console.log(`Setting theme to '${value}'`);

        document.documentElement.setAttribute("data-theme", value);
      }
    });
  }

  registerToggleButtonById(id: string): void {
    const button = document.getElementById(id);

    if (!button) {
      throw new Error(`Could not find element button#${id}`);
    }

    button.addEventListener("click", () => {
      const currentTheme = this.atom.get();

      if (currentTheme === "dark") {
        this.atom.set("light");
      } else {
        this.atom.set("dark");
      }
    });
  }

  toggle(): string {
    const currentTheme = this.atom.get();
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    this.atom.set(newTheme);

    return newTheme;
  }
}

export default ThemeStore.Instance;
