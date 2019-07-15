import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './SimpleCarousel.less';
import Slogan from "../Slogan/Slogan";
import {connect} from 'react-redux';

const SimpleCarousel = props => {
    let content = <Carousel
        showArrows
        emulateTouch
        infiniteLoop
        autoPlay
        interval={2000}
    >
        {props.pictures.map(picture => (
            <div key={picture.id}>
                <img src={picture.url} alt={picture.url}/>
            </div>
        ))}
    </Carousel>;
    let slogan = null;
    if (props.banner && props.pictures.length !== 0) {
        slogan = <Slogan title={"Lights Photography"}
                         subtitle={"\"Parce que vos instants ont de la valeur pour nous\""}
        />
    }
    return (
        <div className={styles.Carousel}>
            {slogan}
            {content}
        </div>
    )
};
const mapStateToProps = state => {
    return {
        pictures: state.home.pictures,
    }
};

export default connect(mapStateToProps)(SimpleCarousel);