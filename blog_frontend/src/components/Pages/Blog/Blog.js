import React from 'react';
import Posts from "../../Utility/Posts/Posts";

const Blog = props => {
    const {clicked} = props;
    return (<Posts
        clicked={clicked}
    />);
};

export default Blog;