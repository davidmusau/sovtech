import {gql} from "apollo-server-express";

export const ServiceTypeDefs = gql`
    type Characters {
        name: String
        height: Int
        mass: Int
        gender: String
        homeworld: Planet
    }
    type Planet {
        name:String
        Climate:String
    }
    type Query {
        # Fetch all users
        getAllPeople:[Characters]
        #pagination
        getAllOnSpecificPage(id:Int!):[Characters]
        #Get Person details
        getPersonDetails(name:String!):[Characters]
        #test query
        hello: String
    }
`;