import {gql} from "apollo-server-express";

export const ServiceTypeDefs = gql`
    type Characters {
        name: String
        height: Int
        mass: Int
        gender: String
        homeworld: String
    }
    type Planet {
        name:String
        Climate:String
    }
  
    type Query {
        # Fetch all users
        characters:[Characters]
        #Get Person details
        person(name:String!):[Characters]
        #pagination
        specificPage(page:Int!):[Characters]
        #test query
        hello: String
    }
`;

