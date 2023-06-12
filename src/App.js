import React,{useState,useEffect} from "react";
import 'tachyons';
import CardList from "./components/CardList";
 import SearchBox from './components/SearchBox'
 import Scroll from "./components/scroll";
 import ErrorBoundary from "./components/ErrorBoundary";
 import './App.css';

function App(){
    // constructor(){
    //     super();
    //     this.state={
    //         robots: [],
    //         searchfield:''
    //     }
    //     console.log("constructor");
    // }

 const [robots,setRobots]=useState([]);
 const [searchfield,setSearchfields]=useState("");
 const [count,setCount]=useState(0);




    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    //         return response.json();
    //     }).then(users=>{
    //         this.setState({robots: users});

    //     })
    //     console.log("component did mount ");
    // }



 useEffect(()=>{
    function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
                return response.json();
            }).then(users=>{
                setRobots(users);
    
            })
            console.log(count)
        }
        fetchData();
           
 },[count])




    const onSearchChange = (event)=>{
        // console.log(event.target.value);
        setSearchfields( event.target.value)}
    
// render(){
//     const {robots,searchfield} = this.state;
//     const filteredRobots = robots.filter(robots=>{
//         return robots.name.toLowerCase().includes(searchfield.toLowerCase())
//     })
const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    






    console.log("render");
     return !robots.length ? <h1>Loading...</h1> :(<div className='tc'>
        <h1>RobotsFriends</h1>
        <button onClick={()=>setCount(count+1)}>clickme</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );

}
// }

export default App; 