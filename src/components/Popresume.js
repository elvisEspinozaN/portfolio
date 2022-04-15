import React from "react"
import { FiX, FiDownload } from "react-icons/fi"

function Popresume(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="popup-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          <FiX />
        </button>
        <a
          href="https://docs.google.com/document/d/1Q-UhwcHVtmcV782000oHeFMTtpTJfJOpY_VOMBJkWYs/edit?usp=sharing"
          download="elvis_espinoza_resume"
          target="_blank"
          rel="noreferrer"
          className="resume-download"
        >
          <FiDownload />
        </a>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  )
}

export default Popresume
