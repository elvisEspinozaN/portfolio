import React from "react"
import Layout from "../components/Layout"
import Headshots from "../components/Headshots"
import Skills from "../components/Skills"
import Exp from "../components/Exp"
import Projects from "../components/Projects"

const Index = () => {
  return (
    <Layout>
      <Headshots />
      <Exp />
      <Skills />
      <Projects />
    </Layout>
  )
}

export default Index
