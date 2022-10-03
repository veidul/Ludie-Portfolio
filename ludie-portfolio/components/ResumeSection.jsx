import {
  AcademicCapIcon,
  CodeBracketIcon,
  ServerStackIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
const supportLinks = [
  {
    name: "Front End Tech",
    href: "#",
    description:
      "React, Typescript, Next.js, React, Redux, Node.js, Jquery, Python",
    icon: CodeBracketIcon,
  },
  {
    name: "Backend Tech",
    href: "#",
    description:
      "Node.js, AWS, Python, MongoDB, DynamoDB, MySql, Express, GraphQL",
    icon: ServerStackIcon,
  },
  {
    name: "Certifications",
    href: "#",
    description:
      "Full Stack Web Development(MERN stack), React Testing, React, Advanced React, Python3, Typescript",
    icon: AcademicCapIcon,
  },
];

export default function ResumeSection() {
  return (
    <div id="ResumeSection" className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/sC6GPyK/Pexels-btgl-3894157.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-slate-600 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-300 md:text-5xl lg:text-6xl">
            Resume
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-300">
            Included below are lists of the technologies I am familiar with and
            a link to download a current copy of my resume.
          </p>
          <div className="my-2">
            <a download href="Ludie-Lambright-Resume.docx" title="Ludie-Resume">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <DocumentArrowDownIcon
                  className="-ml-1 mr-3 h-5 w-5"
                  aria-hidden="true"
                />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
