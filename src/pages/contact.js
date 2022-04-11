import React from "react"
import Seo from "../components/Seo"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <form
            name="Contact-Form"
            method="POST"
            action="/thanks"
            data-netlify="true"
          >
            <div className="form-group">
              <input type="hidden" name="form-name" value="Contact-Form" />
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
