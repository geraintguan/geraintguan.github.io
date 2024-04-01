import { ExternalTextLink } from "#root/components/ExternalTextLink";
import { WorkExperienceCard } from "#root/components/WorkExperienceCard";

export default function Page() {
  return (
    <>
      <div className="py-8 text-xl font-bold text-slate-100">About</div>
      <div className="flex flex-col gap-4">
        <p>
          Ever since I stumbled across programming and wrote my first
          application, a tic-tac-toe game with a command-line interface written
          in C++, when I was 12 I have been enamoured with building stuff with
          code. After a stint in academia studying Computer Science at the{" "}
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
          In my current role I spearheaded the creation of a new department
          aimed at improving our developer experience and productivity, building
          out our API and Webhooks functionality, and supporting the wider
          business in our growth aims with technical expertise.
        </p>
        <p>
          I am extremely passionate about building great products, businesses,
          and teams with technology, as well as science and technology in
          broader society in general. Please feel free to reach out if you are
          interested in a potential collaboration or just want to chat about
          these topics. I am always happy to meet new people, learn about their
          work, and help out in any way I can (although I am{" "}
          <b className="font-bold">not</b> currently looking for another
          full-time role at the moment).
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
            "MongoDB",
            "AngularJS (1.x)",
            "Node.js",
          ]}
          description={
            <article className="prose prose-invert">
              <p>
                Worked as an independent contributor in an early-stage
                engineering team on significant projects including a new public
                REST API and a complete rewrite of the core availability engine.
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
