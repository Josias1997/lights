import React, {Component} from 'react';
import { connect } from 'react-redux';
import Posts from "../../components/Posts/Posts";
import {
    initArticles
} from "../../store/actions";

class Blog extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.children !== nextProps.children;
    }
    componentDidMount() {
        this.props.onInitArticles();
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

const mapDispatchToProps = dispatch => {
    return {
        onInitArticles: () => dispatch(initArticles())
    }
};

export default connect(null, mapDispatchToProps)(Blog);