import React from "react";
import People from "../../components/People";
import Query from "../../components/Query";
import PEOPLE_QUERY from "../../queries/people/people";

const Home = () => {
    // Placeholder Data
    const data = [{
        name: "John Doe", deathDate: "01.01.2020", coverImage: "https://via.placeholder.com/150"
    }, {
        name: "Jane Doe", deathDate: "01.01.2020", coverImage: "" +
            "https://via.placeholder.com/150"
    }, {
        name: "Jean Doe", deathDate: "01.07.2002", coverImage: "https://via.placeholder.com/150"
    }];

    return (
        // <div>
        //   <div className="uk-section">
        //     <div className="uk-container uk-container-large">
        //       <h1>Say Their Names</h1>
        //       <Query query={ARTICLES_QUERY}>
        //         {({ data: { articles } }) => {
        //           return <Articles articles={articles} />;
        //         }}
        //       </Query>
        //     </div>
        //   </div>
        // </div>

        <div>
            <div className="home">
                <Query query={PEOPLE_QUERY}>
                    {({data: {people}}) => {
                        return <People people={people}/>;
                    }}
                </Query>
            </div>
        </div>
    );
};

export default Home;
