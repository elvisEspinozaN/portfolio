import React from "react"
import logo from "../assets/images/logo.jpg"
import PagePaths from "../const/path"
import { CgAlignRight } from "react-icons/cg"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-heading">
          <img src={logo} alt="logo" />
          <button type="button" className="click-btn">
            <CgAlignRight></CgAlignRight>
          </button>
        </div>
        <PagePaths styleClass="nav-paths"></PagePaths>
      </div>
    </nav>
  )
}

export default Navbar
