import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// function component "App" (implemented with hooks)
const App = () => {

    // use State Hook to add states
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    // const [count, setCount] = useState(0);


    // use Effect Hook to add the effect of fetching data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users);
            });
            // console.log(count);
    }, []) // 2nd parameter to ensure fetch also occurs once after the component is first rendered.

    // event method that used to change the state of App 
    // Will be passed to the child component SearchBox that trigger the event
    // Note: use arrow function to make the this refer to the Component where the function defined, ie, App
    const onSearchChange = (event) => {
        // Do not change state variables directly. Always change via this.setState() function or setVariable() from state hook
        setSearchField(event.target.value);
    }

    let robotsFiltered = robots.filter(
        robot => { return robot.name.toLowerCase().includes(searchField.toLowerCase()) }
    );


    return !robots.length ?
        <h1 className='f1 tc'>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={robotsFiltered} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default App;