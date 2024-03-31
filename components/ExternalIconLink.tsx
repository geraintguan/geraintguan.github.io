import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ExternalIconLinkProps = FontAwesomeIconProps & {
  readonly ariaLabel: string;
  readonly href: string;
};

export function ExternalIconLink({
  ariaLabel,
  href,
  ...faProps
}: ExternalIconLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className="w-8 text-slate-400 hover:text-slate-100 focus:text-slate-100 focus:outline-none"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon {...faProps} />
    </a>
  );
}
