import React from "react"
import Heading from "./Heading"
import Project from "./Project"
import featured from "../const/featured"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <section className="section featured">
      <Heading heading="featured" />
      <div className="section-center featured-center">
        {featured.map((feature, e) => {
          return <Project key={feature.id} index={e} {...feature} />
        })}
      </div>
      <Link to="/projects" className="btn center-btn">
        projects
      </Link>
    </section>
  )
}

export default Projects
