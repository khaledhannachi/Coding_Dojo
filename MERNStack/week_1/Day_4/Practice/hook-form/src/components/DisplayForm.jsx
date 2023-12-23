import React from 'react'

const DisplayForm = (props) => {
const {oneuser} = props;
  return (
    <div>
        <h2>First Name: {oneuser.firstname}</h2>
        <h2>Last Name: {oneuser.lastname}</h2>
        <h2>Email : {oneuser.email}</h2>
        <h2>Password : {oneuser.password}</h2>
        <h2>Confirm Password : {oneuser.confirmpassword}</h2>
        
    </div>
  )
};
export default DisplayForm;