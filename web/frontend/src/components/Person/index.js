import React from "react";
import { Link } from "react-router-dom";

const Person = ({ person }) => {
    console.log(person);
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? person.image.url
      : process.env.REACT_APP_BACKEND_URL + person.image.url;
  return (



    <Link to={`/people/${person.name}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img src={imageUrl} alt={person.image.url} height="100" />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {person.name}
          </p>

        </div>
      </div>
    </Link>
  );
};

export default Person;
