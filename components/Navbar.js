/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <>
      <header className="normal-flex py-10 md:py-20">
        <nav className="normal-flex space-x-4 cursor-pointer">
          <img src="/icons/logo.svg" alt="brand logo" />
        </nav>
        <section className="normal-flex space-x-4">
          <p className="text-sm md:text-base xl:text-lg btn-without-bg md:bg-transparent">
            Login
          </p>
          <button className="text-[14px] hidden md:inline btn-primary">
            Try for free
          </button>
        </section>
      </header>
    </>
  )
}

export default Navbar
