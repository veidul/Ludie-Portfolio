import { GlobeAltIcon } from "@heroicons/react/24/solid";

const myStyle = {
  backgroundImage:
    "url('https://i.ibb.co/7kQKhXd/pexels-jeremy-bishop-2397652.jpg')",
  backgroundSize: "cover",
};
const posts = [
  {
    title: "OnSchedule",
    gitHub: "https://github.com/veidul/onSchedule",
    href: "https://on-schedule-llzhpebgm-veidul.vercel.app/",
    category: { name: "", href: "#" },
    description:
      "Full Stack Next.js application with registration, login, and logout. Save events to a calendar, view them by day, week, and month.",
    imageUrl: "https://i.ibb.co/Jt4Lwhq/On-Schedule.png",
    technologies: "Next.js/Tailwind/React/Mongodb",
  },
  {
    title: "The Event Community",
    gitHub: "https://theeventcommunity.com/",
    href: "https://theeventcommunity.com/",
    category: { name: "", href: "#" },
    description:
      "Start up company I worked on contract with. The Event Community is a platform striving to support small businesses. It makes it easy to search and find local event services in your area. I was responsible for the front end fixes of the site.",
    imageUrl: "https://i.ibb.co/R9B7WqL/Chrome-t-P6-QXVbrw2.png",
    technologies: "React/Tailwind/Node.js",
  },
  {
    title: "Cypher-DM",
    gitHub: "https://github.com/veidul/CYPHER_DM",
    href: "https://sheltered-plateau-08067.herokuapp.com/",
    category: { name: "", href: "#" },
    description: "Chat application that allows user to chat in real time",
    imageUrl: "https://i.ibb.co/55GwVzf/cypher-dm.png",
    technologies: "React/Apollo/MongoDB/GraphQL",
  },
  {
    title: "Crypto Champs",
    gitHub: "https://github.com/veidul/CryptoChamps",
    href: "https://protected-harbor-41960.herokuapp.com/",
    category: { name: "", href: "#" },
    description:
      "Cryptocurrency Fantasy Tournament application, Choose your coins add them to your wallet within the given bank amount. Join or create a tournament and see how your wallet stacks up to to your friends!",
    imageUrl: "https://i.ibb.co/X47bYG5/crypto-Champs.jpg",
    technologies: "JavaScript/Moment/Tailwind/MySQL",
  },
  {
    title: "Game of War",
    gitHub: "https://github.com/veidul/game-of-war",
    href: "https://ahnmac.github.io/group_project_1/",
    category: { name: "", href: "#" },
    description:
      "Card game application that uses a deck of cards API. Play against the computer in a game of WAR. Automated game logic calculates score and lets player know if they win or lose.",
    imageUrl: "https://i.ibb.co/jf6vP4Y/game-of-war.png",
    technologies: "JavaScript/API/Jquery/CSS",
  },
  {
    title: "Budget Tracker",
    gitHub: "https://github.com/veidul/on-off-budget-tracker",
    href: "https://on-off-budget-tracker-veidul.herokuapp.com/",
    category: { name: "", href: "#" },
    description:
      "Budget tracker application that allows user to keep track of budgets. You can enter deposits and expenses. User can deposit or enter expenses while there is no internet connection. When the user gains access to the internet again those offline additions will then persist.",
    imageUrl: "https://i.ibb.co/sg1MB4g/on-off-budget-tracker.png",
    technologies: "MongoDB/Node/IndexedDB/Service-worker",
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="ProjectsSection"
      className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 h-fit"
      style={myStyle}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="w-fit p-2 rounded text-3xl font-bold tracking-tight text-indigo-300 sm:text-4xl">
            Things I Have Built
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600"></p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-indigo-400">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-900">
                      {post.description}
                    </p>
                    <p className="text-sm font-medium text-gray-900 my-2">
                      Tech:{post.technologies}
                    </p>
                  </a>
                </div>
                <div className="font-bold text-xl mb-2 flex space-x-10">
                  <a className="flex w-fit" href={post.gitHub}>
                    <img
                      className="hover:bg-slate-400"
                      src="https://img.icons8.com/fluency/42/000000/github.png"
                      alt=""
                    />
                  </a>
                  <a className="flex w-fit hover:bg-slate-400" href={post.href}>
                    <GlobeAltIcon className="h-10 w-10 text-gray-700" />
                  </a>
                </div>
                <div className="font-bold text-xl mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
