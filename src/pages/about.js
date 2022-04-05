import React from "react"
import Heading from "../components/Heading"

const About = () => {
  return (
    <>
      <section className="about-main">
        <div className="section-center about-center">
          <img
            src="https://i.imgur.com/w4RuseO.jpg"
            alt="headshot"
            className="about-img"
          />
          <article className="about-cont">
            <Heading heading="About Me" />
            <p>Welcome to my software engineering portfolio!</p>
            <hr />
            <br />
            <br />
            <p>
              Chillwave pork belly knausgaard, poke hammock beard cray organic
              echo park. DIY chillwave selvage, letterpress wayfarers ennui cred
              semiotics sustainable. Twee freegan slow-carb mustache small
              batch. Shabby chic bespoke direct trade kale chips salvia
              thundercats. Williamsburg pour-over seitan banjo taxidermy
              hammock. Affogato hashtag pinterest squid, glossier enamel pin
              williamsburg yuccie edison bulb.
            </p>
            <p>
              And more hipster ipsum... I'm baby cloud bread listicle beard,
              trust fund 8-bit meditation gochujang subway tile. Banjo palo
              santo chillwave hell of man braid, next level meditation health
              goth air plant hammock man bun. Thundercats messenger bag
              actually, live-edge single-origin coffee adaptogen tote bag
              skateboard lumbersexual yuccie photo booth drinking vinegar edison
              bulb beard. Gochujang disrupt kogi literally, asymmetrical
              polaroid occupy forage fingerstache. Roof party bespoke truffaut
              disrupt drinking vinegar photo booth brooklyn intelligentsia
              bicycle rights keffiyeh kickstarter small batch tofu kogi
              lumbersexual.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
