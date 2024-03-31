export type LinkProps = {
  readonly children: string;
  readonly href: string;
};

export default function Link({ children, href }: LinkProps) {
  return (
    <a
      className="font-bold text-slate-100 hover:underline"
      href={href}
      rel="noreferrer"
      target="_self"
    >
      {children}
    </a>
  );
}
