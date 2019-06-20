import React from 'react';
import {Carousel} from "react-responsive-carousel";
import Roll from 'react-reveal/Roll';
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './MyCarousel.less';
import Loader from "../Loader/Loader";
import Banner from "../Slogans/Banner/Banner";

const MyCarousel = props => {
    const {elements, title, carouselClicked} = props;
    let div = <Loader/>;
    let newTitle = null;
    if (title === 'Blog') {
        newTitle = 'Last Articles';
    }
    else {
        newTitle = 'Last Offers';
    }
    if(elements.length !== 0) {
        div = <div className={styles.OffersText} onClick={carouselClicked}>
            <Banner element={elements[0]}
                    newTitle={newTitle}
            />
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
                       <div key={element.id} className={styles.singleCarousel}>
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