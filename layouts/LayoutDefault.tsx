import { ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./index.css";

export type LayoutDefaultProps = {
  readonly children: ReactNode;
};

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return <div className="flex min-h-screen text-slate-300">{children}</div>;
}
