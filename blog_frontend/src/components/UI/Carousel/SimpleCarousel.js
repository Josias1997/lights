import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './SimpleCarousel.less';
import Loader from '../Loader/Loader';
import Slogan from "../Slogans/Slogan/Slogan";
import { connect } from 'react-redux';

const SimpleCarousel = props => {
    let content = <Loader/>;
    if (!props.loading) {
        content = <Carousel
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
        </Carousel>
    }
    let slogan = null;
    if (props.banner && !props.loading) {
        slogan =  <Slogan title={"Lights Photography"}
                          subtitle={"\"Because your moments are valuable to us\""}
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
        loading: state.home.loading,
        error: state.home.error
    }
};

export default connect(mapStateToProps)(SimpleCarousel);