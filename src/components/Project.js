import React from "react"
import { FaGithubSquare, FaSearch } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ title, desc, imgUrl, githubUrl, index, tags, url }) => {
  return (
    <article className="project">
      <img src={imgUrl} alt={title} className="project-img" />
      <div className="project-cont">
        <span className="project-num">0{index + 1}.</span>
        <Link to={`/projects/${title}`}>
          <h4>{title}</h4>
        </Link>
        <p className="project-desc">{desc}</p>
        <div className="project tags">
          {tags.map(tag => {
            return <span key={tag.id}>{tag.tag}</span>
          })}
        </div>
        <div className="project-link">
          <a href={githubUrl}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaSearch className="project-icon"></FaSearch>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
