import React, {Component} from 'react';
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
        const {anotherPage, clicked} = this.props;
        return (<div className={"Blog"}>
            <Posts articles={this.state.articles}
                   anotherPage={anotherPage}
                   clicked={clicked}
            />
        </div>);
    }
}

export default Blog;