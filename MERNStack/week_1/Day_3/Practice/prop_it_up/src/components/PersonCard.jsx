import React from "react";
const PersonCard = (props) => {
    const {person} = props;
    return (
        <div>
            {person.map((oneperson, index)=>{
                return <div key={index} ><h1>{oneperson.lastname},{oneperson.firstname}</h1>
                <h2>Age : {oneperson.age}</h2>
                <h2>Hair Color : {oneperson.haircolor}</h2>
                </div>
            })}
            
           
        </div>
    )
}
export default PersonCard;