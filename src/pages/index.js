import React from "react"
import Layout from "../components/Layout"
import Headshots from "../components/Headshots"
import Skills from "../components/Skills"
import Exp from "../components/Exp"
import Projects from "../components/Projects"

const Index = () => {
  return (
    <main>
      <Headshots />
      <Exp />
      <Skills />
      <Projects />
    </main>
  )
}

export default Index
