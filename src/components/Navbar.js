import React from "react"
import logo from "../assets/images/logo.jpg"
import PagePaths from "../const/path"
import { CgAlignRight } from "react-icons/cg"
import { Link } from "gatsby"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-heading">
          <img style={{ height: 50 }} src={logo} alt="logo" />
          <button type="button" className="click-btn" onClick={toggleSidebar}>
            <CgAlignRight />
          </button>
        </div>
        <div className="nav-paths">
          {PagePaths.map(path => {
            return (
              <Link key={path.id} to={path.url}>
                {path.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
