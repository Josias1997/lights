import React, { Component } from 'react';
import styles from './About.less';
import { connect } from 'react-redux';
import {initProfile} from "../../store/actions";

class About extends Component {

    componentDidMount() {
        this.props.onInitProfile()
    }
    render() {
        const { firstName, lastName, phoneNumber, email, overview, url } = this.props.profile;
        return (
            <div className={styles.BlurContainer}>
                <div className={styles.Profile}>
                    <img src={url} alt={url}/>
                </div>
                <div className={styles.Description}>
                    <h1>{firstName} {lastName}</h1>
                    <p>Contact : +212 {phoneNumber}</p>
                    <p>Email : {email}</p>
                    <h3>Vision :</h3>
                    <p id={"overview"}>
                        {overview}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.about.profile,
        error: state.about.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitProfile: () => dispatch(initProfile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);