import CharactersAPI from "./datasource/CharactersAPI";

export interface Character {
    name: string
    gender: string
    height: number
    mass: number
    homeworld: Planet
}
export interface Planet {
    name:string
    climate:string
}
export interface SearchCharacter {
    name: string
    page: number
}
export interface SearchInput {
    search: SearchCharacter
}
export interface DataSources {
   characterAPI: CharactersAPI
}

export interface Context {
    dataSources: DataSources
}
