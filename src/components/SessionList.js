import React, { Component } from 'react';

import { Link } from '@reach/router';

import Moment from 'react-moment';

import axios from 'axios';

import Error from './Error';

class SessionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sessions: [],
            message: null,
            hasError: false,
            isLoading: false
        };
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        });

        axios.get("http://localhost:51000/sessions/all?page=0&size=10")
            .then(({ data }) => {
                let sessionList = [];
                for (let item in data) {
                    sessionList.push({
                        _id: data[item]._id,
                        sessionName: data[item].sessionName,
                        startTime: data[item].startTime,
                        endTime: data[item].endTime,
                        sessionDate: data[item].sessionDate,
                        churchId:data[item].churchId
                    });
                }
                this.setState({
                    sessions: sessionList,
                    isLoading: false
                });
            })
            .catch(error => {
                var errorMessage;
                if (error.message != null) {
                    errorMessage = error.message;
                }

                this.setState({
                    hasError: true,
                    message: errorMessage,
                    isLoading: false
                });

            });
    }

    render() {



        const avalableSessions = this.state.sessions.map(item => {

            return (
                <div className="col-md-12 m-2" key={item._id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.sessionName}</h5>
                            <div className="card-text mb-1">
                                <Moment
                                    date={item.startTime}
                                    format="h:mm a"
                                />
                                {" - "}
                                <Moment
                                    date={item.endTIme}
                                    format="h:mm a"
                                />
                            </div>
                            <div className="card-text mb-1">
                                <Moment
                                    date={item.sessionDate}
                                    format="LL"
                                />
                            </div>
                            <Link to="/" className="btn btn-primary">Book A Seat</Link>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {(this.state.hasError && !this.state.isLoading) ? <Error errorMessage={this.state.message}/> : null}
                {this.state.isLoading ? (<div className="spinner-pos">
                    <div className="spinner-border spinner-size text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) : (<div className="container">
                    <div className="mx-auto justify-content-center">{avalableSessions}</div>
                </div>)
                }
            </div>
        );
    };
}

export default SessionList;