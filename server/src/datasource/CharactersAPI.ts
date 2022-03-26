import { RESTDataSource } from 'apollo-datasource-rest'
import {Character} from "../types";

const BASE_URL = 'https://swapi.dev/api/';


export default class CharactersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://swapi.dev/api'
    }

    
    async getAllPeople() {
       return  await this.get('people')
           //.then(response =>response.results.map((character:Character) => this.characterReducer(character)))
        // // transform the raw launches to a more friendly
        // console.log(typeof (response.results))
        // return Array.isArray(response)
        //     ? response.map((character) => this.characterReducer(character)) : [];
    }
// leaving this inside the class to make the class easier to test
    characterReducer(character:Character) {
        return {
            name: character.name ,
            gender:  character.gender ,
            height:  character.height ,
            mass:  character.mass ,
            homeworld:character.homeworld
        };
    }

    
}
