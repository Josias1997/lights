import React from 'react';
import {Carousel} from "react-responsive-carousel";
import Roll from 'react-reveal/Roll';
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './ContribCarousel.less';
import Banner from "../Banner/Banner";
import { connect } from 'react-redux';
import truncate from "../../../helpers/truncate";

const ContribCarousel = props => {
    const {title, carouselClicked} = props;
    let elements = props.articles.slice(0, 3);
    let div = <div>

    </div>;
    let newTitle = null;
    if (title === 'Blog') {
        newTitle = 'Derniers Articles';
    }
    else {
        newTitle = 'Dernières offres';
        elements = props.offers.slice(0, 3);
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
                       <div key={element.id}
                            className={styles.singleCarousel}
                            onClick={carouselClicked}
                       >
                            <img src={element.url} alt={element.url} />
                            <p className={"legend"}>
                                {truncate(element.content, 100, null)}
                            </p>
                       </div>
                    )
                }
                    )}
                </Carousel>
        </Roll>
    )
};

const mapStateToProps = state => {
    return {
        articles: state.blog.articles,
        offers: state.offer.offers
    }
};

export default connect(mapStateToProps)(ContribCarousel);