export type ExternalTextLinkProps = {
  readonly children: string;
  readonly href: string;
};

export function ExternalTextLink({ children, href }: ExternalTextLinkProps) {
  return (
    <a
      className="font-bold text-slate-100 hover:underline"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
