import React from 'react'

function bio(props) {
  return (
    <div>
    <h4 style={{fontStyle:"italic",color:"purple"}}>{props.bio}</h4>
    
    </div>
  )
}
bio.defaultProps={
  bio:"This is my Bio"
}
export default bio