import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

import { setSearchField, requestRobots } from '../actions';

function App(props) {  
  const [count, setCount] = useState(0) 

useEffect(() => {
  props.onRequestRobots()
},[])

const { searchField, onSearchChange, robots, isPending } = props;
const filteredRobots = robots.filter((robot) => {
  const robotName = robot.name.toLowerCase();
  return robotName.includes(searchField.toLowerCase());
  });

  return isPending ?
  <h1>Loading</h1> :
  (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button onClick={()=>setCount(count+1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// dispatch comes from redux which we use to dispatch the action to the reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);