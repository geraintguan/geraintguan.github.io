import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { ReactNode } from "react";

export type ExternalIconLinkProps = FontAwesomeIconProps & {
  ariaLabel: string;
  href: string;
};

function ExternalIconLink({
  ariaLabel,
  href,
  ...faProps
}: ExternalIconLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className="text-slate-400 hover:text-slate-100 focus:text-slate-100 focus:outline-none"
      href={href}
      target="_blank"
    >
      <FontAwesomeIcon {...faProps} />
    </a>
  );
}

type ExternalTextLinkProps = {
  children: string;
  href: string;
};

function ExternalTextLink({ children, href }: ExternalTextLinkProps) {
  return (
    <a
      className="text-slate-100 font-bold hover:underline"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

type WorkExperienceCardProps = {
  startDate: Date;
  endDate?: Date;
  place: string;
  title: string;
  description: ReactNode;
  badges?: string[];
};

function WorkExperienceCard({
  startDate,
  endDate,
  place,
  title,
  description,
  badges = [],
}: WorkExperienceCardProps) {
  const formattedStartDate = format(startDate, "MMM yyyy");
  const formattedEndDate = endDate ? format(endDate, "MMM yyyy") : "Present";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 uppercase dark: text-slate-400">
          {formattedStartDate} — {formattedEndDate}
        </div>
        <div className="flex flex-col mt-4 lg:mt-0">
          <div className="text-lg text-right font-bold dark:text-slate-100">
            {title}
          </div>
          <div className="text-right dark:text-slate-400">{place}</div>
        </div>
      </div>
      <div className="dark:text-slate-300">{description}</div>
      <div className="flex flex-wrap gap-4">
        {badges.sort().map((badge, index) => (
          <div
            className="text-xs font-bold bg-indigo-900 text-indigo-300 px-3 py-1 rounded-md min-w-fit"
            key={index}
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

export const meta = {
  title: "Geraint Guan - Home",
  description: "Geraint Guan's personal home page",
};

export function Page() {
  return (
    <main className="flex min-h-screen px-8 dark:text-slate-300">
      <div className="flex flex-col lg:max-w-6xl lg:flex-row mx-auto my-4 lg:my-12">
        <header className="flex flex-col min-w-fit lg:sticky lg:top-0 lg:max-h-screen lg:py-20">
          <div className="font-bold text-4xl dark:text-slate-100">
            Geraint Guan
          </div>
          <div className="text-xl py-2">
            Lead Software Engineer at Appointedd
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
          </div>
        </header>
        <div className="flex flex-col mt-4 lg:mt-0 lg:px-12">
          <div className="text-xl py-8 font-bold dark:text-slate-100">
            About
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Ever since I stumbled across programming and made my first
              command-line tic-tac-toe game written in C++ when I was 12, I have
              been enamoured with the art of writing code. After a stint in
              academia studying Computer Science at the{" "}
              <ExternalTextLink href="https://www.st-andrews.ac.uk/">
                University of St Andrews
              </ExternalTextLink>{" "}
              I joined{" "}
              <ExternalTextLink href="https://www.appointedd.com/">
                Appointedd
              </ExternalTextLink>{" "}
              and have the great pleasure of working on a great product with an
              amazing team of people.
            </p>
            <p>
              I currently split my time between engineering management, product
              management, operational infrastructure, and programming. I love
              being able to work on all aspects of a product focused technology
              business and I am passionate about building both great products
              and great teams.
            </p>
            <p>
              In my downtime I enjoy messing around with electronics, making
              music, and playing games (both tabletop and digital).
            </p>
          </div>
          <div className="text-xl py-8 font-bold lg:mt-12 dark:text-slate-100">
            Experience
          </div>
          <div className="flex flex-col gap-8">
            <WorkExperienceCard
              startDate={new Date("2020-04-01")}
              place="Appointedd"
              title="Lead Software Engineer"
              description={
                <article className="prose dark:prose-invert">
                  <p>
                    Worked as both an engineering manager and a senior
                    independent contributor. Continued to research and introduce
                    new, modern technologies such as Storybook, GraphQL, and
                    tRPC to improve developer productivity and experience.
                    Collaborated with designers to research and implement a new
                    design system to improve the consistency and development
                    speed of the UI/UX of the product. My responsibilities in
                    this role are split between contributing as an engineering
                    manager and as a
                  </p>
                  <p>
                    As a senior contributor I worked on certain projects
                    independently with notable examples being:
                  </p>
                  <ul>
                    <li>
                      <b>Web View Integration</b> - I built the front-end and
                      back-end of a web view designed to be embedded into one of
                      our partner's mobile apps. This web view has a subset of
                      the features of our main app with a user interface
                      designed to look similar to the partner's user interface.
                    </li>
                    <li>
                      <b>Payment Integration</b> - I built both the front-end
                      and back-end of the OAuth v2.x part of a payment
                      integration along with utilities to easily work with the
                      resulting credentials. The end result was a scalable
                      framework that could then also be utilised for easily
                      building other OAuth v2.x integration pieces in our app.
                    </li>
                  </ul>
                </article>
              }
              badges={[
                "PHP",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "React",
                "GraphQL",
              ]}
            />
            <WorkExperienceCard
              startDate={new Date("2019-01-01")}
              endDate={new Date("2020-04-01")}
              place="Appointedd"
              title="Senior Software Engineer"
              description={
                <p>
                  Worked as a senior independent contributor as well as
                  contributing to various engineering processes along with
                  hiring to expand the engineering team. Researched and
                  introduced new, modern technologies such as React, TypeScript,
                  and AWS CDK to improve developer productivity and experience.
                </p>
              }
              badges={[
                "PHP",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "React",
                "GraphQL",
              ]}
            />
            <WorkExperienceCard
              startDate={new Date("2017-01-01")}
              endDate={new Date("2019-01-01")}
              place="Appointedd"
              title="Software Engineer"
              description={
                <p>
                  Worked as an independent contributor in an early-stage
                  engineering team on significant projects including a new
                  public REST API and a complete rewrite of the core
                  availability engine.
                </p>
              }
              badges={[
                "PHP",
                "JavaScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
              ]}
            />
          </div>
          <div className="flex flex-col py-24">
            <p className="text-slate-400">
              This site was created on{" "}
              <ExternalTextLink href="https://www.gnu.org/software/emacs/">
                Emacs
              </ExternalTextLink>{" "}
              by yours truly, using{" "}
              <ExternalTextLink href="https://react.dev/">
                React
              </ExternalTextLink>{" "}
              &{" "}
              <ExternalTextLink href="https://tailwindcss.com/">
                Tailwind CSS
              </ExternalTextLink>{" "}
              rendered as a static site at build time using{" "}
              <ExternalTextLink href="https://vitejs.dev/">
                Vite
              </ExternalTextLink>{" "}
              &{" "}
              <ExternalTextLink href="https://vite-plugin-ssr.com/">
                vite-plugin-ssr
              </ExternalTextLink>
              . It is deployed and hosted on{" "}
              <ExternalTextLink href="https://pages.github.com/">
                GitHub Pages
              </ExternalTextLink>
              . All text uses the{" "}
              <ExternalTextLink href="https://rsms.me/inter/">
                Inter
              </ExternalTextLink>{" "}
              font family and icons are from{" "}
              <ExternalTextLink href="https://fontawesome.com/">
                Font Awesome
              </ExternalTextLink>
              . The source code is publicly available at this{" "}
              <ExternalTextLink href="https://github.com/geraintguan/geraintguan.github.io">
                GitHub repository
              </ExternalTextLink>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
