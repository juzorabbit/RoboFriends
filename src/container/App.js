import React,{Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield:''
		}
	}

    componentDidMount(){
    	//fetch is a tool to make http request in our code
    	fetch('https://jsonplaceholder.typicode.com/users').then(
    		response=>response.json()).then(
    		users=>{this.setState({robots:users})});
    }




	onSearchChange= (event)=>
	{

		this.setState({searchfield: event.target.value})
    }
	render(){
               const { robots, searchfield } = this.state;
		 const filterRobot= robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		 if(this.state.robots.length===0){
		 	return <h1>Loading </h1>
		  }

		 else{

				return(
				<div className='tc'>
				 <h1 className='f1'>RoboFriends</h1> 
				 <SearchBox searchChange={this.onSearchChange}/>
				 <Scroll>
				< CardList robots={filterRobot} />
				</Scroll>
				</div>
				);
		     }
		 }
		}
	

  export default App;