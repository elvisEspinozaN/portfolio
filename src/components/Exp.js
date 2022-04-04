import React from "react"
import Heading from "./Heading"
import exps from "../const/exp"
import { FaChevronCircleRight } from "react-icons/fa"

const Exp = () => {
  const [value, setValue] = React.useState(0)
  const { position, company, date, desc } = exps[value]
  return (
    <section className="section exps">
      <Heading heading="Experiences" />
      <div className="exps-center">
        <div className="btn-cont">
          {exps.map((e, i) => {
            return (
              <button
                key={i}
                className={i === value ? "exp-btn a-btn" : "exp-btn"}
                onClick={() => setValue(i)}
              >
                {e.company}
              </button>
            )
          })}
        </div>
        <article className="exp-cont">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="exp-date">{date}</p>
          {desc.map(e => {
            return (
              <div key={e.id} className="exp-desc">
                <p>{e.nan}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Exp
