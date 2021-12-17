/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <>
      <section className="lg:flex lg:flex-row-reverse">
        <article className="xl:ml-8 mt-8">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="w-64 h-w-64 lg:w-60 lg:h-60 xl:w-96 lg:80 xl:h-96 blobby-blob -top-16 left-16 bg-base-animation-purple"></div>
              <div className="w-64 h-w-64 lg:w-60 lg:h-60 xl:w-96 lg:80 xl:h-96 blobby-blob top-44 right-40 bg-base-animation-orange animation-delay-2000"></div>
              <div className="w-64 h-w-64 lg:w-60 lg:h-60 xl:w-96 lg:80 xl:h-96 blobby-blob -bottom-8 left-48 bg-base-animation-blue animation-delay-4000"></div>
              <div className="w-64 h-w-64 lg:w-60 lg:h-60 xl:w-96 lg:80 xl:h-96 blobby-blob -bottom-32 -right-4 bg-base-animation-red"></div>
            </div>
            <img
              src="/pics/hero-image.svg"
              alt="hero section pic"
              className="w-full shadow-2xl"
            />
          </div>
        </article>
        <article className="w-full lg:w-1/2 mt-28 space-y-8">
          <h1 className="text-5xl text-base-secondary font-semibold">
            Get aligned around your goals
          </h1>
          <p className="text-[20px] text-base-muted">
            Simple & straightforward project management tool based on what
            really matters the most. Your goals.
          </p>
          <button className="btn-primary w-full lg:w-auto px-10 py-5 text-lg">
            Try beta for free
          </button>
        </article>
      </section>

      {/* icons with description section  */}

      <section className=" my-64 mx-auto ">
        <article className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:space-x-8 space-y-16 lg:space-y-0 xl:space-y-0">
          <div className="max-w-[23rem] space-y-2">
            <img
              src="/icons/circle-pie.svg"
              alt="circle pie icon qoals website"
            />
            <h3 className="font-semibold text-[24px]">Goal-based</h3>
            <p className="text-[20px] text-base-muted">
              Democratize your roadmap by setting goals with context, instead of
              creating a wall of tasks.
            </p>
          </div>
          <div className="max-w-[23rem] space-y-2">
            <img src="/icons/team.svg" alt="team icon qoals website" />
            <h3 className="font-semibold text-[24px]">Collaborative</h3>
            <p className="text-[20px] text-base-muted">
              Simple and effortless collaboration without any limitations.
              Everyone is invited to the party!
            </p>
          </div>
          <div className="max-w-[23rem] space-y-2">
            <img
              src="/icons/hamburger-feature.svg"
              alt="hamburger feature qoals website"
            />
            <h3 className="font-semibold text-[24px]">Transparent</h3>
            <p className="text-[20px] text-base-muted">
              Get a birds-eye view of the progress you make as well as personal
              updates
            </p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Hero
