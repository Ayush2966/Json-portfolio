import React from 'react'

const LineBreak = (props) => {
  return (
    <>
      <div style={props.typingStatus ? { display: "none" } : { display: "flex" }} className="line-break"></div>
    </>
  )
}

export default LineBreak
