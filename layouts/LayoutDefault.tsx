import { ReactNode } from "react";
import "./index.css";

export type LayoutDefaultProps = {
  readonly children: ReactNode;
};

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <div className="flex min-h-screen px-8 text-slate-300">{children}</div>
  );
}
