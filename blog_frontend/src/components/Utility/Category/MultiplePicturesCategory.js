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
                 className={styles.MultipleCategory}
            >
                <Title name={category.name}
                       styleClass={styles.MultipleCategoryTitle}
                />
                <Carousel
                    showArrows
                    emulateTouch
                    infiniteLoop
                    autoPlay
                    interval={2000}
                >
                    {categoryPictures.map(picture => {
                        return(<div className={styles.Multiple} key={picture.id}>
                            <img src={picture.url} alt={picture.url}/>
                        </div>)
                    })}
                </Carousel>
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