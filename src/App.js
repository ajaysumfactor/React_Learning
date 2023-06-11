import React from "react";
import 'tachyons';
import CardList from "./CardList";
import {robots} from './data/robots';
import SearchBox from './SearchBox'

const App=()=>{
    return (
        <div class='tc'>
        <h1>RobotsFriends</h1>
        <SearchBox/>
        <CardList robots={robots}/>
        </div>
    );
}

export default App; 