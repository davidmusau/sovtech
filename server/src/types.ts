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

export interface DataSources {
   characterAPI: CharactersAPI
}

export interface Context {
    dataSources: DataSources
}
