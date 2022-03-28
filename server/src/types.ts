import CharactersAPI from "./datasource/CharactersAPI";

export interface Character {
    name: string
    gender: string
    height: number
    mass: string
    homeworld: String
}
export interface PageResponse{
    count:Number
    next:string
    previous:string
    results:Character[]
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
