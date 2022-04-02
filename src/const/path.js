import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 3,
    text: "about",
    url: "/about/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
]

const myPaths = data.map(path => {
  return (
    <li key={path.id}>
      <Link to={path.url}>{path.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-paths ${styleClass ? styleClass : ""}`}>{myPaths}</ul>
  )
}
