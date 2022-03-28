import {gql} from "apollo-server-express";

export const ServiceTypeDefs = gql`
    # models
    type Character {
        name: String
        height: Int
        mass: String
        gender: String
        homeworld: String
    }
    type PageResponse{
        count:Int
        next:String
        previous:String
    results:[Character]
    }
    # queries
    type Query {
        # Fetch all users
        characters:[Character]
        #Get Person details
        person(name:String!):[Character]
        #pagination
        specificPage(page:Int!):PageResponse
    }
`;

