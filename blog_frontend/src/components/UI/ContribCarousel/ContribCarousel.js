import React from 'react';
import Roll from 'react-reveal/Roll';
import styles from './ContribCarousel.less';
import Banner from "../Banner/Banner";
import truncate from "../../../helpers/truncate";
import {connect} from "react-redux";

const ContribCarousel = props => {
    const {title, carouselClicked} = props;
    let elements = props.articles.slice(0, 3);
    let div = <div>

    </div>;
    let newTitle = null;
    if (title === 'Blog') {
        newTitle = 'Derniers Articles';
    } else {
        newTitle = 'Dernières offres';
        elements = props.offers.slice(0, 3);
    }
    if (elements.length !== 0) {
        div = <div className={styles.OffersText} onClick={carouselClicked}>
            <Banner element={elements[0]}
                    newTitle={newTitle}
            />
        </div>
    }
    return (
        <Roll left>
            {div}
            <div className={styles.singleCarousel}>
                <div id="myCarousel2" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">

                        {elements.map((element, index) => (
                            <li key={element.id} data-target="myCarousel2" data-slide-to={index}
                                className={index === 0 ? "active" : ""}>

                            </li>
                        ))}
                    </ol>
                    <div className="carousel-inner" role="listbox" onClick={carouselClicked}>
                        {elements.map((element, index) => {
                            return (
                                <div key={element.id}
                                     className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                    <div className="view">
                                        <img className="d-block w-100"
                                             src={element.url}
                                             alt={element.title}/>
                                        <div className="mask rgba-black-slight">

                                        </div>
                                    </div>
                                    <div className="carousel-caption">
                                        <h3 className="h3-responsive">{element.title}</h3>
                                        {element.content !== undefined ? <p>{truncate(element.content, 30, null)}</p>:null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">

                </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">

                </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                ;
            </div>
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