import React from "react"
import Headshots from "../components/Headshots"
import Skills from "../components/Skills"
import Exp from "../components/Exp"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <main>
        <Headshots />
        <Exp />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default Index
