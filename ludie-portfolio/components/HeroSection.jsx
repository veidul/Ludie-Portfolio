export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://i.ibb.co/TWwTfwK/hero-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-indigo-400">
              Web Developer
            </h2>
            <h3 className="mt-8 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Ludie Fletcher Lambright V
            </h3>
            <p className="mt-8 text-m text-gray-900">
              I am a Full Stack Web Developer with prior studies in Business and
              Communications. I have always been a problem solver, at previous
              work places I was nicknamed “MacGyver”. I was always the one
              fixing things. My fascination with computers and technology
              started when I rebuilt a broken PC that was once my brothers.
              Programming gives me the same feeling like I had when the broken
              computer finally turned on and worked like new. A graduate top of
              my class at UC Irvine, Cont. Education, Full Stack Web
              Development. My professor was inspired by my engagement in the
              class, and so he invited me to join his start-up as a Full Stack
              Web Developer. I love nerding out on AWS and React.Js pretty much
              daily. Additionally, I am enjoying a couple side projects and some
              freelance work.
            </p>
            <div className="prose prose-indigo text-m mt-8 text-gray-900">
              <p>
                Prior to my Full Stack Development Program, I worked for 10
                years as a Server and Bartender. I advanced serious people
                skills here, dealing with a broad spectrum of people of diverse
                personalities and backgrounds. I learned the importance of
                customer service, communication, and how to work with a team. I
                honed a professional, service oriented attitude over the years,
                creating good habits around being punctual, always ready to
                learn something new and adapt to any environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
