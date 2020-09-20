import React, { Component } from 'react';

import axios from 'axios';

class Session extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sessionName: '',
            startTime: 0,
            endTime: 0,
            sessionDate: 0,
            seatsAvailable: 0,
            message: null,
            hasError: false,
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ 
            isLoading: true,
            message:null,
            hasError: false,
        });

        var date =  new Date(this.state.sessionDate).getTime();
        var sTime = new Date(this.state.sessionDate + " " + this.state.startTime).getTime();
        var eTime = new Date(this.state.sessionDate + " " + this.state.endTime).getTime();

        if(eTime < sTime){
            this.setState({ 
                isLoading: false,
                message:'End Time cannot be earlier than Start Time',
                hasError: true,
            });
            return;
        }

        var sessionInfo = {
            sessionName: this.state.sessionName,
            startTime: sTime,
            endTime: eTime,
            sessionDate:date,
            seatsAvailable: this.state.seatsAvailable,
            churchId: "5f65cafcff4a3d6ddc7b3e83"
        }

        
        axios.post(`http://localhost:51000/sessions`, sessionInfo)
            .then(res => res.json)
            .then(res => {
                this.setState({
                    sessionName: '',
                    startTime: '',
                    endTime: '',
                    seatsAvailable: 0,
                    sessionDate:'',
                    message: "Session Created.",
                    hasError: false,
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


    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({
            [itemName]: itemValue
        });
    }

    render() {
        return (
            <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <p className="h4 mb-4">Session</p>
                                    {this.state.message !== null ? (
                                        <div className={`col-12 alert ${this.state.hasError ? "alert-danger" : "alert-success"} px-3`}>
                                            {this.state.message}
                                        </div>
                                    ) : null}
                                    <input type="text"
                                        className="form-control mb-4"
                                        placeholder="Session Name"
                                        name="sessionName"
                                        maxLength="100"
                                        required
                                        value={this.state.sessionName}
                                        onChange={this.handleChange}></input>
                                    <div className="form-group form-row">
                                        <label
                                            className="col-md-2 col-form-label text-md-left"
                                            htmlFor="startTIme"
                                        >
                                            Start Time
                                    </label>
                                        <div className="col-md-4">
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="startTime"
                                                id="startTIme"
                                                value={this.state.startTime}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-row">
                                        <label
                                            className="col-md-2 col-form-label text-md-left"
                                            htmlFor="endTime"
                                        >
                                            End Time
                                    </label>
                                        <div className="col-md-4">
                                            <input
                                                type="time"
                                                className="form-control"
                                                name="endTime"
                                                id="endTime"
                                                value={this.state.endTime}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group form-row">
                                        <label
                                            className="col-md-2 col-form-label text-md-left"
                                            htmlFor="sessionDate"
                                        >
                                            Date
                                    </label>
                                        <div className="col-md-4">
                                            <input
                                                type="Date"
                                                className="form-control"
                                                name="sessionDate"
                                                id="sessionDate"
                                                value={this.state.sessionDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <input type="number"
                                        className="form-control mb-4"
                                        placeholder="Seats Available"
                                        required
                                        name="seatsAvailable"
                                        value={this.state.seatsAvailable}
                                        onChange={this.handleChange}></input>
                                    <button className={`btn btn-primary btn-block ${this.state.isLoading ? "disabled" : ""} `} type="submit">
                                        {this.state.isLoading ? (
                                            <div>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{" "}Loading...
                                            </div>
                                        ) : <div>Create Session</div>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        );
    };
}

export default Session;