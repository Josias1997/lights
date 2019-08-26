import React, {useEffect} from 'react';
import SinglePictureCategory from '../Category/SinglePictureCategory';
import Roll from 'react-reveal/Roll';
import styles from './Gallery.less';
import {connect} from 'react-redux';
import MultiplePicturesCategory from "../Category/MultiplePicturesCategory";
import {initCategories, initPictures} from "../../../store/actions";
import LoadComponent from "../LoadComponent/LoadComponent";

const Gallery = props => {
    const {single, categoryClicked, categories, loading, error} = props;
    useEffect(() => {
        props.onInitPictures();
        props.onInitCategories();
    }, []);
    return (
        <LoadComponent loading={loading} error={error}>
            <Roll>
                <div className={single ? styles.Gallery : styles.Slider}>
                    {single ? categories.map(category => (
                        <SinglePictureCategory
                            key={category.id}
                            category={category}
                            clicked={() => categoryClicked(category.id)}
                        />)) : categories.map(category => {
                        return (
                            <MultiplePicturesCategory
                                key={category.id}
                                category={category}
                            />
                        );
                    })}
                </div>
            </Roll>
        </LoadComponent>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.gallery.categories,
        error: state.gallery.error || state.home.error,
        loading: !state.gallery.loading && !state.home.loading,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitPictures: () => dispatch(initPictures()),
        onInitCategories: () => dispatch(initCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);