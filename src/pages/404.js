import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main className="error-main">
        <div className="error-cont">
          <h1>Page does not exist!</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
