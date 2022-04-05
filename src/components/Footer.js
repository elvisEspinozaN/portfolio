import React from "react"
import AccentPaths from "../const/accentPaths"

const Footer = () => {
  return (
    <footer className="footer-main">
      <div>
        <div className="footer-paths accent-paths">
          <AccentPaths />
        </div>
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>EE. all rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
