import React, { Component } from 'react';

import axios from 'axios';

class Church extends Component {

    constructor(props) {
        super(props);
        this.state = {
            churchName: '',
            email: '',
            location: '',
            seatCount: 0,
            message: null,
            hasError: false,
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({ isLoading: true })
        var churchRegistrationInfo = {
            churchName: this.state.churchName,
            primaryContact: this.state.email,
            location: this.state.location,
            seatCount: this.state.seatCount
        }

        e.preventDefault();

        axios.post(`http://localhost:51000/church`, churchRegistrationInfo )
            .then(res => res.json)
            .then(res => {
                this.setState({
                    churchName: '',
                    email: '',
                    location: '',
                    seatCount: 0,
                    message: "Church Created.",
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
                                    <p className="h4 mb-4">Church</p>
                                    {this.state.message !== null ? (
                                        <div className={`col-12 alert ${this.state.hasError ? "alert-danger" : "alert-success"} px-3`}>
                                            {this.state.message}
                                        </div>
                                    ) : null}
                                    <input type="text"
                                        className="form-control mb-4"
                                        placeholder="Chuch Name"
                                        name="churchName"
                                        required
                                        value={this.state.churchName}
                                        onChange={this.handleChange}></input>

                                    <input type="email"
                                        className="form-control mb-4"
                                        placeholder="E-mail"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}></input>

                                    <input type="text"
                                        className="form-control mb-4"
                                        placeholder="Location"
                                        required
                                        name="location"
                                        maxLength="60"
                                        value={this.state.location}
                                        onChange={this.handleChange}></input>

                                    <input type="number"
                                        className="form-control mb-4"
                                        placeholder="Seat Count"
                                        required
                                        name="seatCount"
                                        value={this.state.seatCount}
                                        onChange={this.handleChange}></input>
                                    <button className={`btn btn-primary btn-block ${this.state.isLoading ? "disabled" : ""} `} type="submit">
                                        {this.state.isLoading ? (
                                            <div>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{" "}Loading...
                                            </div>
                                        ): <div>Create Church</div>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
}

export default Church;