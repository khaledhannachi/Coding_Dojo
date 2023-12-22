import { useState } from "react";
const Person = (props) => {
    const {oneperson, index}= props;
    const [PersonObj, setPersonobj] = useState(oneperson);
    const happyBirthday = () => {
    setPersonobj({ ...PersonObj, age: PersonObj.age + 1 });
    
};
    return (<div key={index} ><h1>{oneperson.lastname},{oneperson.firstname}</h1>
                <h2>Age : {PersonObj.age}</h2>
                <h2>Hair Color : {oneperson.haircolor}</h2>
                <button onClick={happyBirthday}>
                Birthday Button for {oneperson.lastname}
                </button>
                <hr />
                </div>
                )
}

export default Person



