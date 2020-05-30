import React from "react";
import Person from "../Person";


const People = ({ people }) => {
  return (
    <div>
    {people.map((person, i) => {
      return <Person person={person} key={`people__${people.id}`} />;
    })}
  </div>
  );
};

export default People;
