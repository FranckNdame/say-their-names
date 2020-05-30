import gql from "graphql-tag";

const PEOPLE_QUERY = gql`
  query People {
    people {
      id
      name
      image {
        url
      }
      date_of_death
    }
  }
`;

export default PEOPLE_QUERY;
