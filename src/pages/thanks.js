import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Thanks = () => {
  return (
    <>
      <Seo title="Thank You" />
      <main className="error-main">
        <div className="error-cont">
          <h1>Thank you for your submission!</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Thanks
