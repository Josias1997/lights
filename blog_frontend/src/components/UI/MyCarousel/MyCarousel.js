import React from 'react';
import {Carousel} from "react-responsive-carousel";
import Roll from 'react-reveal/Roll';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './MyCarousel.css';
import truncate from "../../../helpers/truncate";
import Loader from "../Loader/Loader";

const MyCarousel = props => {
    const {elements, title} = props;
    let div = <Loader/>;
    let newTitle = null;
    if (title === 'Blog') {
        newTitle = 'Last Article';
    }
    else {
        newTitle = 'Last Offer';
    }
    if(elements.length !== 0) {
        let {elementTitle, created_at, content} = elements[0];
        let date = new Date(created_at).toString();
        let truncatedContent = truncate(content, null, null);
        div = <div className={"Offers-text"}>
                <h1>{newTitle}</h1>
                <h3>{elementTitle}</h3>
                <i>{date}</i>
                <p>{truncatedContent}</p>
            {title === 'Offers' ? <h1>Price : {elements[0].price}</h1>:null}
            </div>
    }
    return (
        <Roll left>
            {div}
                <Carousel
                showArrows
                emulateTouch
                infiniteLoop
                autoPlay
                interval={4000}
            >
                {elements.map(element =>{
                    return (
                       <div key={element.id} className={"single-carousel"}>
                            <img src={element.url} alt={element.url}/>
                       </div>
                    )
                }
                    )}
                </Carousel>
        </Roll>
    )
};

export default MyCarousel;