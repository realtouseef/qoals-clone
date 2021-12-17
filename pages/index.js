import Head from "next/head"
import Featured from "../components/Featured"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Qoals Clone</title>
        <meta name="description" content="Created by @touseefcodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
    </div>
  )
}
