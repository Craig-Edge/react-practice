import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'



// function App() {
//   const [robots] = useState([]);
//   const [searchField] = useState('');
// }

class App extends Component{
    constructor() {
        super() 
        this.state = {
            robots: [],
            searchfield: ''
        }
    }



componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users }));
    // .then(users => {});  // to test empty array in response 
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

    render() {
      const {robots, searchfield} = this.state;
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
          return <h1 className='tc f1'>There are no robots :(</h1>
        } else {        
          return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                  </ErrorBoundry>                  
                </Scroll>            
            </div>
      );
    }
  }
}

export default App;