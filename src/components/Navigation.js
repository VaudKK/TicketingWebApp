import React, { Component } from 'react';

import { Link } from '@reach/router'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                    <Link className="navbar-brand" to="/">Ticketing</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link className="nav-link" to="/">My Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;