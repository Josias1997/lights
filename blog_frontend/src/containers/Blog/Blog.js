import React, {Component} from 'react';
import Posts from "../../components/Posts/Posts";

class Blog extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.children !== nextProps.children;
    }
    render() {
        const {anotherPage, clicked} = this.props;
        return (<div className={"Blog"}>
            <Posts
                   anotherPage={anotherPage}
                   clicked={clicked}
            />
        </div>);
    }
}

export default Blog;