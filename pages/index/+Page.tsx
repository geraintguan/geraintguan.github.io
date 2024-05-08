import { ExternalTextLink } from "#root/components/ExternalTextLink";
import { WorkExperienceCard } from "#root/components/WorkExperienceCard";

export default function Page() {
  return (
    <>
      <div className="py-8 text-xl font-bold text-slate-100">About Me</div>
      <div className="flex flex-col gap-4">
        <p>
          Hi, I&apos;m Geraint! 👋 I&apos;ve been enamoured with technology and
          programming since a young age. After a stint in academia studying as
          an undergraduate in Computer Science at the{" "}
          <ExternalTextLink href="https://www.st-andrews.ac.uk/">
            University of St Andrews
          </ExternalTextLink>{" "}
          I joined{" "}
          <ExternalTextLink href="https://www.appointedd.com/">
            Appointedd
          </ExternalTextLink>{" "}
          where I have the great pleasure of growing with a very early stage
          start-up at the start of my professional career with an amazing team
          of people.
        </p>
        <p>
          I&apos;m interested in all things science, technology, and business
          (especially start-ups and scale-ups). If you&apos;re interested in
          connecting with me or are looking for some technical advice, feel free
          to reach out!
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
            "Docker",
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
                Working as both an engineering manager and a senior independent
                contributor in a newly created department planned and executed
                by myself with the aid of senior leaders in the company.
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
            "Docker",
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
                Worked as both an engineering manager and a senior independent
                contributor. Continued to research and introduce new, modern
                technologies such as Storybook, GraphQL, and tRPC to improve
                developer productivity and experience. Collaborated with
                designers to research and implement a new design system to
                improve the consistency and development speed of the UI/UX of
                the product.
              </p>
              <p className="font-bold text-slate-100">Notable Achievements</p>
              <ul>
                <li>
                  Built a full-stack embedded web view integration for one of
                  our key partner&apos;s mobile apps.
                </li>
                <li>
                  Provided technical support and handled the migration of data
                  for a key client with a tight deadline for going live.
                </li>
                <li>
                  Built a scalable OAuth 2.0 internal library for external
                  integrations that can be easily extended and utilised by any
                  of our integrations that used OAuth 2.0 for authentication and
                  authorisation.
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
            "Docker",
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
                contributing to various engineering processes along with hiring
                to expand the engineering team.
              </p>
              <p className="font-bold text-slate-100">Notable Achievements</p>
              <ul>
                <li>
                  Introduced and implemented Infrastructure-as-Code using AWS
                  Cloud Development Kit (CDK) into our stack.
                </li>
                <li>
                  Introduced and and implemented React into our stack in a
                  progressive manner, allowing us to utilise React components in
                  our legacy Angular UI so we could incrementally migrate our UI
                  to React.
                </li>
                <li>
                  Expanded the minimal usage of TypeScript and helped widespread
                  adoption of it in new code.
                </li>
              </ul>
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
            "Docker",
            "MongoDB",
            "AngularJS (1.x)",
            "Node.js",
          ]}
          description={
            <article className="prose prose-invert">
              <p>
                Worked as an independent contributor in an early-stage
                engineering team, undertaking large-scale solo projects.
              </p>
              <p className="font-bold text-slate-100">Notable Achievements</p>
              <ul>
                <li>
                  Built the first version of our public API with robust
                  automated testing.
                </li>
                <li>
                  Rewrote a complex PHP legacy availability engine as a Node.js
                  service and contributed the rollout of the transition to the
                  new service with a senior engineer on the team.
                </li>
              </ul>
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
          <ExternalTextLink href="https://react.dev/">React</ExternalTextLink> &{" "}
          <ExternalTextLink href="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalTextLink>{" "}
          rendered as a static site at build time using{" "}
          <ExternalTextLink href="https://vitejs.dev/">Vite</ExternalTextLink> &{" "}
          <ExternalTextLink href="https://vike.dev/">Vike</ExternalTextLink>. It
          is deployed and hosted on{" "}
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
    </>
  );
}
