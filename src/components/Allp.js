import React from "react"
import Heading from "./Heading"
import Project from "./Project"
import allP from "../const/allP"

const Allp = () => {
  return (
    <section className="section featured">
      <Heading heading="My Projects" />
      <div className="section-center featured-center">
        {allP.map((all, e) => {
          return <Project key={all.id} index={e} {...all} />
        })}
      </div>
    </section>
  )
}

export default Allp
