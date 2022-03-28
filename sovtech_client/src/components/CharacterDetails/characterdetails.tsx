import {useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Character } from "../../common/interfaces/character";
import CharacterList from "../CharacterList/characterlist";
import { QUERY_CHARACTER_DETAILS } from "../Queries/query";

import "../../common/styles/layout.css"

const CharacterDetails = ()=>{
        const  [searchFilter, setSearchFilter] = useState("")
        const [executeSearch, { data,loading }] = useLazyQuery(QUERY_CHARACTER_DETAILS);
    const enabled = searchFilter.length >=2;

    function refreshPage() {
            window.location.reload();

    }
        return (
            <div>
                <header className="header" >Welcome to SovTech</header>

                <div style={{ padding: 20 }}>
                        <input
                            type="text"
                            placeholder="Search here"
                            onChange={(e) => setSearchFilter(e.target.value)}
                        />
                        <button disabled={!enabled}
                            onClick={() =>
                                executeSearch({
                                    variables: { name: searchFilter }
                                })
                            }
                        >
                            OK
                        </button>
                    {loading ||  searchFilter === "" || !data ? (
                            <CharacterList/>
                        ):

                        data.person.map((item:Character) => (
                            <th key={item.name}>
                                <tr>Name: {item.name}</tr>
                                <tr>Height: {item.height}</tr>
                                <tr>Mass: {item.mass}</tr>
                                <tr>Gender: {item.gender}</tr>
                                <tr>HomeWorld: {item.homeworld} </tr>

                                <br/>
                                <br/>
                                <button onClick={refreshPage}>Click to reload!</button>

                            </th>

                        ))

                    }
                </div>
            </div>
        )
}

export default CharacterDetails