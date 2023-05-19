import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

import { setSearchField } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
// import ErrorBoundry from '../components/ErrorBoundry'

function App() {
  const [robots, setRobots] = useState([])  
  const [count, setCount] = useState(0)
  
  // These below 
  const searchField = useSelector((state) => state.searchField);
  const dispatch = useDispatch();

useEffect(()=> {  
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {
      setRobots( users )
    });
    console.log(count)
},[count])

// console.log(useSelector((state) => state.searchField));

const filteredRobots = robots.filter((robot) => {
  const robotName = robot.name && robot.name.toLowerCase();
  return robotName && robotName.includes(searchField.toLowerCase());
  });

  return !robots.length ?
  <h1>Loading</h1> :
  (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button onClick={()=>setCount(count+1)}>Click Me!</button>
      <SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}



export default connect()(App);