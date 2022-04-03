import React from "react"
import Heading from "./Heading"
import skills from "../const/skills"

const Skills = () => {
  return (
    <section className="section bg-nan">
      <Heading heading="Skills" />
      <div className="section-center skills-center">
        {skills.map(skill => {
          const { id, icon, title, text } = skill

          return (
            <article key={id} className="skill">
              {icon}
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
