import React from "react";
import Query from "../../components/Query";
import PEOPLE_QUERY from "../../queries/people/people";
import Person from "../../components/Person"

const People = ({ people }) => {
  return (
    <div>
      {/* Remove this */}
      <h2>This is the collection page</h2> 
    {people.map((person, i) => {
      return <Person person={person} key={`people__${people.id}`} />;
    })}
  </div>
  );
};


const Collection = () => {
  return (
    <div>
      <div className="collection">
          <Query query={PEOPLE_QUERY}>
          {({ data: { people } }) => {
               return <People people={people} />;
          }}
          </Query>
        </div>
    </div>
  );
};

export default Collection;
