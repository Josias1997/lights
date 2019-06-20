import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category/Category';
import Roll from 'react-reveal/Roll';
import './Gallery.css';

class Gallery extends Component {
    state = {
        categories: []
    };
    componentDidMount() {
        axios.get('api/blog/categories')
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
    }
    handleImageClick = id => {
        console.log(id);
    };
    render() {
        const {single, categoryClicked} = this.props;
        let content = <p>Loading</p>;
        if(this.state.categories) {
            content =  this.state.categories.map(category => {
                    return(
                        <Category
                            key={category.id}
                            category={category}
                            single={single}
                            clicked={() => categoryClicked(category.id)}
                            imageClicked={() => this.handleImageClick(category.id)}
                        />
                    );
                });
        }
        return(
            <Roll>
                <div className={single ? "Gallery":"Slider"}>
                    {content}
                </div>
            </Roll>
        );
    }
}

export default Gallery;