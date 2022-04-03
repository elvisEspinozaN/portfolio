import React from "react"

const Heading = ({ heading }) => {
  return (
    <div className="section-heading">
      <h2>{heading || "default heading"}</h2>
    </div>
  )
}

export default Heading
