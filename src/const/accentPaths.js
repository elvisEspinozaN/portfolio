import React from "react"
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="accent-icon"></FaGithub>,
    url: "https://github.com/elvisEspinozaN",
  },
  {
    id: 2,
    icon: <FaLinkedin className="accent-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/elvis-espinoza/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="accent-icon"></FaTwitterSquare>,
    url: "https://twitter.com/elvisEspinozaN",
  },
]

const paths = data.map(path => {
  return (
    <li key={path.id}>
      <a
        href={path.url}
        target="_blank"
        rel="noreferrer"
        className="accent-path"
      >
        {path.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`accent-paths ${styleClass ? styleClass : ""}`}>{paths}</ul>
  )
}
