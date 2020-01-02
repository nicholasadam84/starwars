import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //React Lifecycle Hook similar to try-catch block in Javascript
    //Receives parameters error and info 
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. There was an error.</h1>
        }
        return this.props.children 
    }
}

export default ErrorBoundary;