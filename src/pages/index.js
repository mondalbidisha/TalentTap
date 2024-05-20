import * as React from "react"
import Hero from "../components/landing/Hero"
import Layout from "../components/root/Layout"

const IndexPage = () => {
  return (
    <Layout
      mainClassName="w-full"
      title="Landing"
      description="Ace your next interview."
    >
      <div className="max-w-6xl mx-auto">
        <Hero />
      </div>
    </Layout>
  )
}

export default IndexPage