import React from "react"
import Exp from "../components/Exp"
import Layout from "../components/Layout"
import Headshots from "../components/Headshots"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { graphql } from "gatsby"

const Index = () => {
  return (
    <Layout>
      <Headshots />
    </Layout>
  )
}

export default Index
