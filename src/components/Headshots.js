import React from "react"
import accentPaths from "../const/accentPaths"
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
            <div className="accent-paths">
              {accentPaths.map(path => {
                return (
                  <a
                    href={path.url}
                    key={path.id}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-path"
                  >
                    {path.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
      </section>
    </header>
  )
}

export default Headshots
