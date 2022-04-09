import React from "react"
import Path from "../const/path"
import AccentPaths from "../const/accentPaths"
import { FaTimesCircle } from "react-icons/fa"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimesCircle />
      </button>
      <div className="side-cont">
        <ul className={isOpen ? "sidebar-paths" : null}>
          {Path.map(p => {
            return (
              <li key={p.id}>
                <Link to={p.url} onClick={toggleSidebar}>
                  {p.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "accent-paths sidebar-icons" : null}>
          {AccentPaths.map(a => {
            return (
              <li key={a.id}>
                <Link to={a.url} onClick={toggleSidebar}>
                  {a.icon}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
