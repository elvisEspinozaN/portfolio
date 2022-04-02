import React from "react"
import AccentPaths from "../const/accentPaths"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Headshots = () => {
  return (
    <header className="headshots">
      <section className="section-center headshots-center">
        <article className="headshots-cont">
          <div>
            <h1>Elvis Espinoza</h1>
            <h3>Software Engineer | Full Stack Developer</h3>
            <h4>Based in NYC</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <AccentPaths />
          </div>
        </article>
      </section>
    </header>
  )
}

export default Headshots
