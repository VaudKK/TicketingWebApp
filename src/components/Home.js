import React, { Component } from 'react';

import { Link } from '@reach/router'

class Home extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div className="display-4 text-primary mt-3 mb-2">
                            Ticketing
                    </div>
                        <p className="lead">
                            With the current covid 19 pandemic this web application
                            helps in managing attendance during days of worship.
                            This facilitates easy tracking and managment of
                            attendees to help in minimizing or stopping the spread of COVID 19
                    </p>
                        <span>
                            <Link to="/sessions" className="btn btn-outline-primary mr-2">
                                See Available Sessions
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

        )
    };
}

export default Home;