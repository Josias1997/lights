import React from 'react';
import {connect} from 'react-redux';
import Card from "../../Grid/CustomCard/CustomCard";

const BlogModalContent = ({articles, id}) => {
    let article = articles.filter(article => (
        article.id === id
    ))[0];
    return (
        <div>
            <Card card={article} single={true}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.blog.articles
    }
};

export default connect(mapStateToProps)(BlogModalContent);