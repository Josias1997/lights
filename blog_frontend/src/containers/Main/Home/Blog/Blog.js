import React, {Component} from 'react';
import Slider from 'react-reveal/Slide';
import axios from 'axios';
import Posts from "../../../../components/Posts/Posts";

class Blog extends Component {
    state = {
        articles: []
    };
    componentDidMount() {
        axios.get('api/blog/articles')
            .then(response => {
                let updatedArticles = response.data.reverse();
                this.setState({
                    articles: updatedArticles
                })
            }).catch(error => {
                console.log(error)
        })
    }
    render() {
        return (<div className={"Blog"}>
            <Slider>
                <Posts articles={this.state.articles}/>
            </Slider>
        </div>);
    }
}

export default Blog;