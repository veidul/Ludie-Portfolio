export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-indigo-600">
              Web Developer
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Ludie Fletcher Lambright V
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              I am a Full Stack Web Developer with a background in Business and
              Communications. Spending most of my younger years working in
              restaurants as a server and bartender. I started my facination
              with computers and technology when I was 12 years old. I have
              always been a problem solver and I love to learn new things. I am
              a graduate of University of California Irvine, Continued Education
              Full Stack Web Development Program. I am currently looking for a
              position as a Full Stack Web Developer.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
                Working within the restaurant industry, I learned the importance
                of customer service, communication, and how to work with a team.
                Time oriented, and a fast learner, I am able to adapt to new
                situations and environments quickly. I have a knack for wanting
                to learn how things work and why they do the things they do.
                From taking apart my first computer at 12 years old, to learning
                how to code, I have a love for technology.
              </p>
              <p>
                After graduating from the coding bootcamp, I have been working
                on my own projects and learning new technologies. I am currently
                working for a start up company with my professor and teachers
                assistant from the bootcamp. I have also worked on a freelance
                project for a week contract helping the owner of a small
                business with their website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
