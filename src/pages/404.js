import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <>
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
