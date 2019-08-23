import React from 'react';
import styles from './Posts.less';
import MyCarousel from "../../UI/ContribCarousel/ContribCarousel";
import Grid from "../../UI/Grid/Grid";
import {connect} from 'react-redux';

const Posts = props => {
    const {clicked} = props;
    let content = <div className={styles.Posts}>
        <MyCarousel
            title={"Blog"}
            loading={props.loading}
            carouselClicked={() => clicked(props.articles[0].id, "articles")}
        />
    </div>;
    return (
        content
    )
};

const mapStateToProps = state => {
    return {
        articles: state.blog.articles,
        loading: state.blog.loading,
        error: state.blog.error
    }
};

export default connect(mapStateToProps)(Posts);