import React from "react"
import Allp from "../components/Allp"
import Seo from "../components/Seo"

const ProjectsPage = () => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-main">
          <Allp />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
