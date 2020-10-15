import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// class form of component App
class App extends Component {
    // constructor of App class
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(
                    { robots: users }
                )
            });
    }

    // event method that used to change the state of App 
    // Will be passed to the child component SearchBox that trigger the event
    // Note: use arrow function to make the this refer to the Component where the function defined, ie, App
    onSearchChange = (event) => {
        // Do not change state variables directly. Always change via this.setState() function
        this.setState({
            searchField: event.target.value
        });
    }

    render() {
        const { robots, searchField } = this.state;
        let robotsFiltered = robots.filter(
            robot => { return robot.name.toLowerCase().includes(searchField.toLowerCase()) }
        );

        return !robots.length ?
            <h1 className='f1 tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={robotsFiltered} />
                    </Scroll>
                </div>
            );
    }
}

export default App;