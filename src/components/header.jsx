import React, { Component } from 'react';
import './header.css';

export default class header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <h2>Welcome</h2>
            </nav>
        )
    }
}
