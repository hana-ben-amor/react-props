import React from 'react'

function profession(props) {
  return (
    <div>I am a {props.profession} </div>
  )
}
profession.defaultProps={
  profession:"a student"
}
export default profession