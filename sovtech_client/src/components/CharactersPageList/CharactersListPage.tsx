import {useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import { Character, CharactersResult } from "../../common/interfaces/character";
import CharacterList from "../CharacterList/characterlist";
import "../../common/styles/layout.css"
import { QUERY_CHARACTER_PAGE } from "../Queries/query";


const CharactersOnSpecificPage = ()=>{
    const  [pageFilter, setPageFilter] = useState("")
    const [executeSearch, { data,loading }] = useLazyQuery(QUERY_CHARACTER_PAGE);
    const enabled = pageFilter.length > 0 ;
    return (
        <div>
            <header className="header" >Welcome to SovTech</header>
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
                {loading || !data ? (  <CharacterList/>
                    ):
                    data.specificPage.map((character:Character)=>(
                        <tr key={character.name} >
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
            <input typeof="number" onChange={(e) =>  setPageFilter(e.target.value)}/>
            <button disabled={!enabled}
                    onClick={() =>
                        executeSearch({
                            variables: { page: parseInt(pageFilter) }
                        })
                    }
            >
                Go
            </button>

        </div>
    )
}

export default CharactersOnSpecificPage