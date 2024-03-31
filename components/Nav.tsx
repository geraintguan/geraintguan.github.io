import {
  faGithubSquare,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ExternalIconLink } from "./ExternalIconLink";

export default function Nav() {
  return (
    <header className="flex min-w-fit flex-col lg:sticky lg:top-0 lg:max-h-screen lg:py-20">
      <div className="text-4xl font-bold text-slate-100">Geraint Guan</div>
      <div className="py-2 text-xl">
        Head of Developer Operations at Appointedd
      </div>
      <div className="flex flex-row gap-4 py-4">
        <ExternalIconLink
          ariaLabel="Go to my GitHub profile"
          href="https://github.com/geraintguan"
          icon={faGithubSquare}
          size="2x"
        />
        <ExternalIconLink
          ariaLabel="Go to my LinkedIn profile"
          href="https://www.linkedin.com/in/geraintguan/"
          icon={faLinkedin}
          size="2x"
        />
        <ExternalIconLink
          ariaLabel="Go to my Instagram profile"
          href="https://www.instagram.com/gggeraint/"
          icon={faSquareInstagram}
          size="2x"
        />
      </div>
    </header>
  );
}
