import React from 'react';
import SinglePictureCategory from '../Category/SinglePictureCategory';
import Roll from 'react-reveal/Roll';
import styles from './Gallery.less';
import {connect} from 'react-redux';
import MultiplePicturesCategory from "../Category/MultiplePicturesCategory";

const Gallery = props => {
        const {single, categoryClicked, categories, isOpen} = props;
        let content = categories.map(category => (
                    <SinglePictureCategory
                        key={category.id}
                        category={category}
                        clicked={() => categoryClicked(category.id)}
                    />));
        if (!single) {
            content = categories.map(category => {
                return (
                    <MultiplePicturesCategory
                        key={category.id}
                        category={category}
                    />
                );
            });
        }
    return (
            isOpen ? <div className={single ? styles.Gallery : styles.Slider}>
                    {content}
                </div> :  <Roll>
                <div className={single ? styles.Gallery : styles.Slider}>
                    {content}
                </div>
            </Roll>
        );
};

const mapStateToProps = state => {
    return {
        categories: state.gallery.categories,
        isOpen: state.main.isOpen,
        error: state.gallery.error,
        loading: state.gallery.loading
    }
};

export default connect(mapStateToProps)(Gallery);