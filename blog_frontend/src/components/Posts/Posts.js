import React, {Component} from 'react';

import styles from './Posts.less';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import Grid from "../UI/Grid/Grid";

class Posts extends Component {
    render() {
        const {anotherPage, clicked, articles} = this.props;
        let content = <div>
            <div className={styles.Posts}>
                <MyCarousel
                    elements={articles}
                    title={"Blog"}
                    carouselClicked={() => clicked(articles[0].id, "articles")}
                />
            </div>
        </div>;
        if (anotherPage) {
            content = <Grid elements={this.props.articles} type={'articles'}/>
        }
        return (
            content
        )
    }
}

export default Posts;