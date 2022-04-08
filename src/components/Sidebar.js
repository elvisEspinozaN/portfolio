import React from "react"
import Path from "../const/path"
import AccentPaths from "../const/accentPaths"
import { FaTimesCircle } from "react-icons/fa"

const Sidebar = () => {
  const isOpen = true
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      Sidebar
      <button className="close-btn" type="button">
        <FaTimesCircle />
        <div className="side-cont">
          <ul className={isOpen ? "sidebar-paths" : null}>
            <Path />
          </ul>
          <ul className={isOpen ? "accent-paths sidebar-icons" : null}>
            <AccentPaths />
          </ul>
        </div>
      </button>
    </aside>
  )
}

export default Sidebar
