import { RESTDataSource } from 'apollo-datasource-rest'
export default class CharactersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://swapi.dev/api'
    }

    // fetch all characters
    async getAllPeople() {
       return  await this.get('people')
    }

// filter people on a specific page
    async getByPage(page: number) {
        return this.get(`people`, {
            page,
        });
    }
// get person details
    async getByName(search:string) {
        return await this.get(`people`,{
            search
        });
    }
}
