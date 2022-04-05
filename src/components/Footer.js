import React from "react"
import AccentPaths from "../const/accentPaths"

const Footer = () => {
  return (
    <footer className="footer-main">
      <div>
        <div className="footer-paths accent-paths">
          <AccentPaths />
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
