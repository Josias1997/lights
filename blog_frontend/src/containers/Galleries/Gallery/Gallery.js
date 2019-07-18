import React from 'react';
import SinglePictureCategory from '../../../components/Category/SinglePictureCategory';
import Roll from 'react-reveal/Roll';
import styles from './Gallery.less';
import {connect} from 'react-redux';
import MultiplePicturesCategory from "../../../components/Category/MultiplePicturesCategory";

const Gallery = props => {
        const {single, categoryClicked} = props;
        let content = props.categories.map(category => (
                    <SinglePictureCategory
                        key={category.id}
                        category={category}
                        clicked={() => categoryClicked(category.id)}
                    />));
        if (!single) {
            content = props.categories.map(category => {
                return (
                    <MultiplePicturesCategory
                        key={category.id}
                        category={category}
                    />
                );
            });
        }
    return (
            <Roll>
                <div className={single ? styles.Gallery : styles.Slider}>
                    {content}
                </div>
            </Roll>
        );
};

const mapStateToProps = state => {
    return {
        categories: state.gallery.categories,
        error: state.gallery.error,
        loading: state.gallery.loading
    }
};

export default connect(mapStateToProps)(Gallery);