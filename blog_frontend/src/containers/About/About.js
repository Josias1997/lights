import React, {Component} from 'react';
import styles from './About.less';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        const {firstName, lastName, phoneNumber, email, overview, url} = this.props.profile;
        let content = <div className={styles.Description}>
            <h1>{firstName} {lastName}</h1>
            <p>Contact : +212 {phoneNumber}</p>
            <p>Email : {email}</p>
            <h3>Vision :</h3>
            <p id={"overview"}>
                {overview}
            </p>
        </div>;
        return (
            <div className={styles.BlurContainer}>
                <div className={styles.Profile}>
                    <img src={url} alt={url}/>
                </div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.about.profile,
        error: state.about.error,
    }
};

export default connect(mapStateToProps)(About);