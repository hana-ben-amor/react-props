import React from 'react'

function fullname(props) {
  return (
    <div >
        <h1 style={{color:"red",fontSize:50,letterSpacing:15,textAlign:'center'}}>{props.fullname}</h1></div>
  )
}

fullname.defaultProps={
  fullname:"flen fouleni"
}
export default fullname