import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css';
import './SimpleCarousel.css';
import Loader from '../Loader/Loader';
import Slogan from "../Slogans/Slogan";

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
                    <p className={"legend"}>{picture.title}</p>
                </div>
            ))}
        </Carousel>
    }
    let slogan = null;
    if (props.banner) {
        slogan =  <Slogan title={"Lights Photography"}
                          subtitle={"\"Because your moments are valuable to us\""}
        />
    }
    return (
        <div className={"Carousel"}>
            {slogan}
            {content}
        </div>
    )
};

export default SimpleCarousel;