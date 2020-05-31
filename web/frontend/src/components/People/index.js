import React from "react";
import Person from "../Person";


const People = ({people}) => {
    return (
        <div className="people-container">
          {people.map((person, i) => <Person person={person} key={`people__${people.id}`}/>)}
        </div>
    );
};

export default People;
