import React, {Component} from 'react';

import './Posts.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";

class Posts extends Component {
    render() {
        let content = <div>
            <div className={"Posts"}>
                <MyCarousel elements={this.props.articles} title={"Blog"}/>
            </div>
        </div>;
        if(this.props.anotherPage) {
            content = <div>Blog</div>
        }
        return (
            content
        )
    }
}

export default Posts;