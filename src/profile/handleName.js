import React from 'react'
function handleName(props) {
  return (
    <div>
     <button style={{margin:40,backgroundColor:"red",padding:20,border:"red",borderStyle:'solid',borderRadius:10,fontWeight:'Bold',fontSize:15}} onClick={() => props.alertMyInput(`My name is  ${props.name}`)}>
     Profile User
   </button>
    </div>
  )
}
handleName.defaultProps={
  name:"sami"
}

export default handleName