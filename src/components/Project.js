import React from "react"
import { FaGithubSquar, FaSearch } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ title, desc, imgUrl, githubUrl, index, tags }) => {
  return (
    <article className="project">
      <img src={imgUrl} alt={title} className="project-img" />
      <div className="project-cont">
        <span className="project-num">0{index + 1}.</span>
      </div>
    </article>
  )
}

export default Project
