import { useQuery } from "@apollo/client"
import { Character, CharactersResult } from "../../common/interfaces/character"
import { QUERY_CHARACTER_LIST } from "../Queries/query"
import "../../common/styles/layout.css"
import React from "react";


const CharacterList = () => {
const {loading,data} = useQuery<CharactersResult>(QUERY_CHARACTER_LIST)
    return(
        <>
            <table className="table">
                <thead className="tableRowHeader">
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
                        data.characters.map((character:Character,index)=>(
                                <tr className="tableRowItems" key={index} data-item={character} onClick={(e)=>{console.log(e)}} >
                                    <td className="tableCell">{character.name}</td>
                                    <td className="tableCell">{character.height}</td>
                                    <td className="tableCell">{character.mass}</td>
                                    <td className="tableCell">{character.gender}</td>
                                    <td className="tableCell">{character.homeworld}</td>
                                </tr>

                        ))
                    }

                </tbody>
            </table>
        </>
    )


}
export default CharacterList

