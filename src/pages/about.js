import React from "react"
import Heading from "../components/Heading"
import Seo from "../components/Seo"
import Popresume from "../components/Popresume"
import { FiFile } from "react-icons/fi"
import { useState } from "react"

const About = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
      <Seo title="About" />
      <section className="about-main">
        <div className="section-center about-center">
          <img
            src="https://i.imgur.com/w4RuseO.jpg"
            alt="headshot"
            className="about-img"
          />
          <article className="about-cont">
            <Heading heading="About Me" />
            <h3>Welcome to my software engineering portfolio!</h3>
            <hr />
            <br />
            <h4>I am a Software Engineer from New York, NY</h4>
            <p>
              Currently a fellow in the Immersive Software Engineering course at
              General Assembly, commited to striving into the tech field, I was
              able to develop a multitude of skills that has allowed me to
              design and develop full-stack software products, and several
              full-stack applications while incorporating the latest frameworks
              and techonologies.
            </p>
            <p>
              I'm a new Full-Stack Developer interested in frontend development
              with a keen interest in React!
            </p>
            <p>Feel free to check my resume here</p>
            <div className="resume">
              <button
                onClick={() => setButtonPopup(true)}
                className="open-button-resume"
              >
                <FiFile />
              </button>
              <Popresume trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img
                  className="resume-img"
                  src="https://i.imgur.com/BNS4sxr.png"
                  alt="resume"
                />
              </Popresume>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
