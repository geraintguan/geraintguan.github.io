import { ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./index.css";
import Nav from "#root/components/Nav";

export type LayoutDefaultProps = {
  readonly children: ReactNode;
};

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <main className="mx-auto flex min-h-screen px-8 text-slate-300">
      <div className="mx-auto my-4 flex flex-col lg:my-12 lg:max-w-6xl lg:flex-row">
        <Nav />
        <div className="mt-4 flex flex-col lg:mt-0 lg:px-12">{children}</div>
      </div>
    </main>
  );
}
