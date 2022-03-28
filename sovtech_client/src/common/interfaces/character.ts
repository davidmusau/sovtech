export interface Character {
    name: string
    height: number
    mass: number
    gender: string
    homeworld: string
}
export interface CharactersResult {
    characters: Array<Character>;
}
