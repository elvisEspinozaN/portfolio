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
            action="https://getform.io/f/e84d9c47-860b-417e-8a43-ac5233dd3b3b"
            method="POST"
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
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Submit Here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
