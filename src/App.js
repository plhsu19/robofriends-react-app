import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots.js'; 

// class form of component App
class App extends Component {
    // constructor of App class
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    
    // event method that used to change the state of App
    // Will be passed to the child component that trigger the event
    onSearchChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );    
    }
}

export default App;