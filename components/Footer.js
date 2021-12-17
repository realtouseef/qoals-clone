const Footer = () => {
  return (
    <>
      <section className="mt-60 mb-40 text-center space-y-4">
        <h1 className="text-[48px] text-base-secondary font-semibold">
          Become goal-oriented
        </h1>
        <p className="text-[20px] text-base-muted">
          Reduce the noise and focus on what really matters the most. Your
          goals.
        </p>
        <button className="btn-primary px-[40px] py-[20px] w-full md:w-fit text-[18px]">
          Try beta for free
        </button>
      </section>
      {/* footer main starts here  */}
      <footer className="normal-flex flex-col lg:flex-row py-20 space-y-4 lg:space-y-0">
        <div className="flex items-center justify-center space-x-4 mb-6 lg:mb-0">
          <img src="/icons/logo.svg" alt="brand logo" />
          <span className="hidden lg:inline text-base-muted text-sm font-semibold">
            Goal-based project management
          </span>
        </div>
        <ul className="flex flex-col sm:flex-row item-center justify-center text-base-accent font-semibold text-xs md:text-sm sm:space-x-2 lg:space-x-0 space-y-2 sm:space-y-0">
          <li className="btn-without-bg md:bg-transparent">Twitter</li>
          <li className="btn-without-bg md:bg-transparent">Contact us</li>
          <li className="btn-without-bg md:bg-transparent">Login</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
