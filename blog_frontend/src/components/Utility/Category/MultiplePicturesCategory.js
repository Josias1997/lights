import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import styles from "./Category.less";
import Title from "../../UI/Title/Title";
import {connect} from "react-redux";

const MultiplePicturesCategory = props => {
        const {category, pictures} = props;
        let categoryPictures = pictures.filter(picture =>
            (category.id === picture.category.id));
        let content = categoryPictures.length !== 0 ? (
            <div key={category.id}
                 className={styles.MultipleCategory + "mt-3"}
            >
                <div id={"categoryCarousel" + category.id} className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">

                        {categoryPictures.map((element, index) => (
                            <li key={index} data-target={category.id} data-slide-to={index}
                                className={index === 0 ? "active" : ""}>

                            </li>
                        ))}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {categoryPictures.map((element, index) => {
                            return (
                                <div key={index}
                                     className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                    <div className="view">
                                        <img className="d-block w-100"
                                             src={element.url}
                                             alt={element.title} style={{
                                                height: 400 + 'px'
                                             }}/>
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
                    <a className="carousel-control-prev" href={"#categoryCarousel"+category.id} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">

                </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={"#categoryCarousel"+category.id} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">

                </span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            </div>
        ) : null;

        return (
            content
        );
};

const mapStateToProps = state => {
    return {
        pictures: state.home.pictures
    }
};

export default connect(mapStateToProps)(MultiplePicturesCategory);