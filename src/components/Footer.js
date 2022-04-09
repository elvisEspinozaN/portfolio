import React from "react"
import accentPaths from "../const/accentPaths"

const Footer = () => {
  return (
    <footer className="footer-main">
      <div>
        <div className="footer-paths accent-paths">
          {accentPaths.map(path => {
            return (
              <a
                href={path.url}
                target="_blank"
                rel="noreferrer"
                key={path.id}
                className="accent-path"
              >
                {path.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <br />
          <br />
          <span>Elvis Espinoza</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
