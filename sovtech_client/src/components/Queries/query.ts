import { gql } from "@apollo/client/core";


export const QUERY_CHARACTER_LIST = gql`
    query CharacterList{
        characters {
            name
            height
            mass
            gender
            homeworld
        }
    }
`;

export const QUERY_CHARACTER_DETAILS =gql`
    query Get_Character_Details($name:String!){
        person (name:$name){
            name
            height
            mass
            gender
            homeworld
        }
    }
`;

export const QUERY_CHARACTER_PAGE =gql`
    query Get_Characters_Page($page:Int!){
        specificPage(page:$page){
            name
            height
            mass
            gender
            homeworld
        }
    }
`;


export  const TEST = gql`
    query TEST_HELLO{
        hello
    }
`;