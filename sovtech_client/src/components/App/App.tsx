import * as React from 'react';
import "../../common/styles/layout.css"
import CharacterDetails from '../CharacterDetails/characterdetails';
const App = () => {
    return (
        <main className="container">
            <div className="wrapper">
                <CharacterDetails/>
            </div>
        </main>

    );
};

export default App;