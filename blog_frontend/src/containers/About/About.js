import React, { Component } from 'react';
import axios from 'axios';
import './About.css';

class About extends Component {
    state = {
        profile: {}
    };
    componentDidMount() {
        axios.get('api/blog/about-us/2')
            .then(response => {
                this.setState({
                    profile: response.data
                })
            })
    }
    render() {
        const { firstName, lastName, phoneNumber, email, overview, url } = this.state.profile;
        return (
            <div className={"BlurContainer"}>
                <div className={"Profile"}>
                    <img src={url} alt={url}/>
                </div>
                <div className={"Description"}>
                    <h1>Owner : {firstName} {lastName}</h1>
                    <p>Contact : +212 {phoneNumber}</p>
                    <p>Email : {email}</p>
                    <h3>LightPhotography's Goals :</h3>
                    <p id={"overview"}>
                        {overview}
                    </p>
                </div>
            </div>
        )
    }
}

export default About;