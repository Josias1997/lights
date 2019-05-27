import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import axios from 'axios/index';
import './Category.css';

class Category extends Component {
    state = {
        name: 'Category',
        pictures: []
    };
    componentDidMount() {
        const {category, single} = this.props;
        axios.get('api/blog/pictures')
            .then(response => {
                const updatedPictures = response.data.filter(picture => {
                    return picture.category.id === category.id
                });
                updatedPictures.reverse();
                this.setState({
                    name: category.name,
                    pictures: single ? Array(updatedPictures[0]) : updatedPictures
                })
            }).catch(error => {
                console.log(error)
        });
    }
    render() {
        const {category, single, clicked, imageClicked} = this.props;
        let content = null;
        if(this.state.pictures.length !== 0) {
            if(single) {
                 content = (
                         <div key={category.id}
                                 className={"Category"}
                                 onClick={clicked} >
                             <div>
                                 <p
                                     className={
                                         category.id <= 3 ? "FirstLineCategoryTitle":"SecondLineCategoryTitle"
                                     }
                                     id={"category-"+category.id}
                                 >{this.state.name}</p>
                             </div>
                                {this.state.pictures.map(picture => {
                                    return (
                                        <div  key={picture.id}
                                              className={"Single"}
                                        >
                                            <img
                                                src={picture.url}
                                                alt={picture.url}
                                            />
                                        </div>
                                    )})}
                         </div>
                 )
            }
            else {
                content = (<div key={category.id} className={"MultipleCategory"}
                >
                <div className={"MultipleCategoryTitle"}>
                  <h1>{this.state.name}</h1>
                </div>
                <Carousel
                    showArrows
                    emulateTouch
                    infiniteLoop
                    autoPlay
                    interval={4000}
                >
                    {this.state.pictures.map(picture => {
                    return (
                        <div key={picture.id}
                             onClick={() => imageClicked(picture.id)}
                             className={"Multiple"}
                        >
                              <img
                                src={picture.url}
                                alt={picture.url}
                            />
                        </div>
                    )})}
                </Carousel>
            </div>)
            }
        }
        return(
            content
        );
    }
}

export default Category;