import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-10 lg:pl-32 lg:pr-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default Layout
