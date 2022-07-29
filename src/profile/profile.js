import React from 'react'
import PropTypes from 'prop-types'; 
import Fullname from './fullname';
import HandleName from './handleName';
import Bio from './bio';
import Profession from './profession'
import Pic from './pic'
import Me from '../me.jpg'
const alertMyInput = name => alert(name);
function profile(fullname,bio,profession) {
  return (
    <div>
        <Fullname fullname="Hana Ben Amor" >
        </Fullname>
        <Profession profession="full stack developer and software engineering student"/>
        <Bio bio="DM me for collaboration " />
        <Pic> 
        <div >
        <img style={{width:'40%',borderRadius:10,marginTop:70}} src={Me} className="img-fluid" alt="logo" /></div></Pic>
        <HandleName  name="11" alertMyInput={alertMyInput}></HandleName>


        {/*this line shows how we work with default props 
        the default props for handle name is Sami
        <HandleName alertMyInput={alertMyInput}></HandleName>
         */}



    </div>
  )
}

profile.propTypes={
   fullname:PropTypes.string,
   bio:PropTypes.string,
   profession:PropTypes.string,
   name:PropTypes.string
}

export default profile