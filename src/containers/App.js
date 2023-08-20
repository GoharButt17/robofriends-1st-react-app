import React, {useState,useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

function App() {
    /* constructor()
    {
        super();
        this.state ={
            robots : [],
            searchfield : ''
        }
    }*/
    const [robots,setRobots] = useState([]);
    const [searchfield,setSearchfeild]=useState('');

    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response =>{
            return Response.json();
        })
        .then(users =>{
            this.setState({
                robots : users
            })
        })
    }*/
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users').then(Response =>{
            return Response.json();
        })
        .then(users =>{
                setRobots(users);
            })
    },[])
    const onSearchChange = (event) =>{
        setSearchfeild(event.target.value);
    }
    
    const filteredRobots=robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.length === 0)
        {
            return <h1>Loading...</h1>
        }
    else{
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
            );
        }
}  

export default App;