import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ExternalIconLink } from "#root/components/ExternalIconLink";
import { ExternalTextLink } from "#root/components/ExternalTextLink";
import { WorkExperienceCard } from "#root/components/WorkExperienceCard";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen px-8 text-slate-300">
      <div className="mx-auto my-4 flex flex-col lg:my-12 lg:max-w-6xl lg:flex-row">
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
          </div>
        </header>
        <div className="mt-4 flex flex-col lg:mt-0 lg:px-12">
          <div className="py-8 text-xl font-bold text-slate-100">About</div>
          <div className="flex flex-col gap-4">
            <p>
              Ever since I stumbled across programming and wrote my first
              application, a tic-tac-toe game with a command-line interface
              written in C++, when I was 12 I have been enamoured with the art
              of writing code. After a stint in academia studying Computer
              Science at the{" "}
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
          </div>
          <div className="py-8 text-xl font-bold text-slate-100 lg:mt-12">
            Experience
          </div>
          <div className="flex flex-col gap-8">
            <WorkExperienceCard
              badges={[
                "PHP",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "React",
                "GraphQL",
                "tRPC",
                "OpenAPI",
                "Node.js",
              ]}
              description={
                <article className="prose prose-invert">
                  <p>
                    Working as both an engineering manager and a senior
                    independent contributor in a newly created department
                    planned and executed by myself with the aid of senior
                    leaders in the company.
                  </p>
                </article>
              }
              place="Appointedd"
              startDate={new Date("2023-10-01")}
              title="Head of Developer Operations"
            />
            <WorkExperienceCard
              badges={[
                "PHP",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "React",
                "GraphQL",
                "tRPC",
                "OpenAPI",
                "Node.js",
              ]}
              description={
                <article className="prose prose-invert">
                  <p>
                    Worked as both an engineering manager and a senior
                    independent contributor. Continued to research and introduce
                    new, modern technologies such as Storybook, GraphQL, and
                    tRPC to improve developer productivity and experience.
                    Collaborated with designers to research and implement a new
                    design system to improve the consistency and development
                    speed of the UI/UX of the product.
                  </p>
                  <p>
                    As a senior contributor I worked on certain projects
                    independently with notable examples being:
                  </p>
                  <ul>
                    <li>
                      <b>Web View Integration</b> - I built the front-end and
                      back-end of a web view designed to be embedded into one of
                      our partner&apos;s mobile apps. This web view has a subset
                      of the features of our main app with a user interface
                      designed to look similar to the partner&apos;s user
                      interface.
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
              endDate={new Date("2023-10-01")}
              place="Appointedd"
              startDate={new Date("2020-04-01")}
              title="Lead Software Engineer"
            />
            <WorkExperienceCard
              badges={[
                "PHP",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "React",
                "GraphQL",
                "Node.js",
              ]}
              description={
                <article className="prose prose-invert">
                  <p>
                    Worked as a senior independent contributor as well as
                    contributing to various engineering processes along with
                    hiring to expand the engineering team. Researched and
                    introduced new, modern technologies such as React,
                    TypeScript, and AWS CDK to improve developer productivity
                    and experience.
                  </p>
                </article>
              }
              endDate={new Date("2020-04-01")}
              place="Appointedd"
              startDate={new Date("2019-01-01")}
              title="Senior Software Engineer"
            />
            <WorkExperienceCard
              badges={[
                "PHP",
                "JavaScript",
                "AWS",
                "MongoDB",
                "AngularJS (1.x)",
                "Node.js",
              ]}
              description={
                <article className="prose prose-invert">
                  <p>
                    Worked as an independent contributor in an early-stage
                    engineering team on significant projects including a new
                    public REST API and a complete rewrite of the core
                    availability engine.
                  </p>
                </article>
              }
              endDate={new Date("2019-01-01")}
              place="Appointedd"
              startDate={new Date("2017-01-01")}
              title="Software Engineer"
            />
          </div>
          <div className="flex flex-col py-24">
            <p className="text-slate-400">
              This site was created on{" "}
              <ExternalTextLink href="https://code.visualstudio.com">
                VS Code
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
              <ExternalTextLink href="https://vike.dev/">Vike</ExternalTextLink>
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
