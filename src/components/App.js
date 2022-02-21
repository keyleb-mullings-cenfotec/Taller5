import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class App extends React.Component {
    state = {
        characters: [
            {
                name: 'John',
                job: 'Smithery'
            },
            {
                name: 'Clyde',
                job: 'Carpenter'
            },
            {
                name: 'Sam',
                job: 'Banker'
            },
            {
                name: 'Rayone',
                job: 'Engineer'
            }
        ]
    };

    removeCharacter = index =>{
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((char, i)=>{
                return i !== index;
            })
        })
    };
}

export default App;
