import React,{Component} from "react";
import 'tachyons';
import CardList from "./CardList";
import {robots} from './data/robots';
import SearchBox from './SearchBox'

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: robots,
            searchfield:''
        }
    }
render(){
    return (
        <div class='tc'>
        <h1>RobotsFriends</h1>
        <SearchBox/>
        <CardList robots={this.state.robots}/>
        </div>
    );
}
}

export default App; 