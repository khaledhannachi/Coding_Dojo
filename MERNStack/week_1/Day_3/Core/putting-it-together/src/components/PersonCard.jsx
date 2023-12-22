import React from 'react'
import Person from './Person'
const PersonCard = (props) => {
const {person} = props;
  return (
    <div>
  { person.map ((oneperson, index)=>{
    return <Person oneperson = {oneperson} index={index}/>
  })}
    </div>
  )
}
export default PersonCard