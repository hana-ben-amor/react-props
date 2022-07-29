import React from 'react'

const pic = props => {
    // whatever is passed between the tags of the component call can be accessed via this syntax
    return <>
    {props.children}
    </>
   };

export default pic