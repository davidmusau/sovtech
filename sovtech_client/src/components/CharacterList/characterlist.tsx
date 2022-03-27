import { useQuery } from "@apollo/client"
import { Character, CharactersResult } from "../../common/interfaces/character"
import {QUERY_CHARACTER_DETAILS, QUERY_CHARACTER_LIST } from "../Queries/query"
import "../../common/styles/layout.css"
import { useState } from "react";
import CharacterDetails from "../CharacterDetails/characterdetails";


const CharacterList = () => {
const {loading,data} = useQuery<CharactersResult>(QUERY_CHARACTER_LIST)
    const [query, setQuery] = useState("")


    return(
        <>
        <div className="DataTable">
            <table className="Table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Gender</th>
                    <th>HomeWorld</th>
                </tr>
                </thead>
                <tbody>
                {loading || !data ? (<tr><td>Loading...</td></tr>):
                        data.characters.map((character,index)=>(
                                <tr key={index} >
                                    <td>{character.name}</td>
                                    <td>{character.height}</td>
                                    <td>{character.mass}</td>
                                    <td>{character.gender}</td>
                                    <td>{character.homeworld}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
        </>
    )


}
export default CharacterList

