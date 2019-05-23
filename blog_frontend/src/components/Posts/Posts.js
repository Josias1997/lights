import React, {Component} from 'react';

import './Posts.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";

class Posts extends Component {
    render() {
        return (<div>
            <h1>Blog</h1>
            <div className={"Posts"}>
                <MyCarousel elements={this.props.articles}/>
            </div>
        </div>)
    }
}

export default Posts;