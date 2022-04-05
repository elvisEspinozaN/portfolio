import React from "react"
import Heading from "./Heading"
import Project from "./Project"
import featured from "../const/featured"
import { Link } from "gatsby"

const Projects = ({ projects, title, aLink }) => {
  return (
    <section className="section projects">
      <Heading heading={title} />
      <div className="section-center projects-center">
        {featured.map((feature, e) => {
          return <Project key={feature.id} index={e} {...feature} />
        })}
      </div>
      {aLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
