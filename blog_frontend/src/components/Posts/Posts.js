import React, {Component} from 'react';

import styles from './Posts.less';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import Grid from "../UI/Grid/Grid";
import { connect } from 'react-redux';

class Posts extends Component {
    render() {
        const {anotherPage, clicked } = this.props;
        let content = <div>
            <div className={styles.Posts}>
                <MyCarousel
                    elements={this.props.articles}
                    title={"Blog"}
                    carouselClicked={() => clicked(this.props.articles[0].id, "articles")}
                />
            </div>
        </div>;
        if (anotherPage) {
            content = <Grid type={'articles'}/>
        }
        return (
            content
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.blog.articles,
        loading: state.blog.loading,
        error: state.blog.error
    }
};

export default connect(mapStateToProps)(Posts);