import React from 'react';
import Posts from "../../Utility/Posts/Posts";

const Blog = props => {
    const {anotherPage, clicked} = props;
    return (<Posts
        anotherPage={anotherPage}
        clicked={clicked}
    />);
};

export default Blog;