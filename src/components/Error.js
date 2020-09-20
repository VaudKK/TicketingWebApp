import React, { Component } from 'react';

import { Link } from '@reach/router'

class Error extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const errorMessage = this.props.errorMessage

        return (
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div className="display-4 text-primary mt-3 mb-2">
                            Oops
                        </div>
                        <p className="lead">
                            You request can't be completed at the moment. Try again later.
                        </p>
                        <p className="lead">
                            {errorMessage}
                        </p>
                        <span>
                            <Link to="/" className="btn btn-outline-primary mr-2">
                                Go Back Home
                        </Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    };
}

export default Error;