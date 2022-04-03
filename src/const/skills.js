import React from "react"
import { FaLaptopCode, FaCode, FaCodeBranch } from "react-icons/fa"

const skills = [
  {
    id: 1,
    icon: <FaLaptopCode className="skills-icon" />,
    title: "Front End",
    text: "HTML | CSS | Sass | JavaScript | Python | Bootstrap | Materialize | React.js | jQuery",
  },
  {
    id: 2,
    icon: <FaCode className="skills-icon" />,
    title: "Back End",
    text: "Node | Express.js | MongoDb | SQL | PostgreSQL | Django",
  },
  {
    id: 3,
    icon: <FaCodeBranch className="skills-icon" />,
    title: "More!",
    text: "Github | OOP | DOM | AJAX | Mongoose ODM | Oauth | Heroku | JSX | Firebase | AWS S3",
  },
]
