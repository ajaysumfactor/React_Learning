import React,{Component} from "react";
import 'tachyons';
import CardList from "./CardList";
 import SearchBox from './SearchBox'
 import Scroll from "./scroll";

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
        console.log("constructor");
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots: users});

        })
        console.log("component did mount ");
    }
    onSearchChange=(event)=>{
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})}
    
render(){
    const filteredRobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log("render");
    if(this.state.robots.length===0){
        return <h1>Loading...</h1>
    }
    else{
    return (
        <div className='tc'>
        <h1>RobotsFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
    );
    }
}
}

export default App; 