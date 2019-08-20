import React from 'react';
import styles from './About.less';
import {connect} from 'react-redux';

const About = props => {
    let content, image = null;
    if (props.profile.length !== 0) {
        const {firstName, lastName, phoneNumber, email, overview, url} = props.profile[0];
        content = <div className={styles.Description}>
            <h1>{firstName} {lastName}</h1>
            <p>Contact : +212 {phoneNumber}</p>
            <p>Email : {email}</p>
            <h3>Vision :</h3>
            <p id={"overview"}>
                {overview}
            </p>
        </div>;
        image = <div className={styles.Profile}>
            <img src={url} alt={url}/>
        </div>
    }
    return (
        <div className={styles.BlurContainer}>
            {image}
            {content}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        profile: state.about.profile,
        error: state.about.error,
    }
};

export default connect(mapStateToProps)(About);