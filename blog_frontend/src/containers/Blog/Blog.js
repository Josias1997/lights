import React, {Component} from 'react';
import Posts from "../../components/Posts/Posts";

class Blog extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.children !== nextProps.children;
    }
    render() {
        const {anotherPage, clicked} = this.props;
        return (<Posts
                   anotherPage={anotherPage}
                   clicked={clicked}
            />);
    }
}

export default Blog;