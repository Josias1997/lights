import React from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.css';
import './MyCarousel.css';

const MyCarousel = props => {
    const {elements} = props;
    return (
        <Carousel
                showArrows
                emulateTouch
                infiniteLoop
                autoPlay
                interval={4000}
            >
                {elements.map(element =>{
                    let date = new Date(element.created_at);
                    return (
                       <div key={element.id}>
                            <h3>{element.title}</h3>
                            <i>Added on {date.toString()}</i>
                            <img src={element.url} alt={element.url}/>
                            <p className={"legend"}>{element.content}</p>
                       </div>
                    )
                }
                    )}
        </Carousel>
    )
};

export default MyCarousel;