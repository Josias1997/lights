import React, {Component} from 'react';

import './Posts.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import Grid from "../UI/Grid/Grid";

class Posts extends Component {
    render() {
        let content = <div>
            <div className={"Posts"}>
                <MyCarousel elements={this.props.articles} title={"Blog"}/>
            </div>
        </div>;
        if (this.props.anotherPage) {
            content = <Grid elements={this.props.articles} type={'articles'}/>
        }
        return (
            content
        )
    }
}

export default Posts;