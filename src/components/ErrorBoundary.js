import React, { Component } from 'react';

// A smart component, a container
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    // catch and handle the error just like the the catch() 
    // does in the try.catch.log JS error handling
    componentDidCatch(error, info) {
        // change component's state to display the different component (when error catched)
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>Oooops! There is an error!</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;