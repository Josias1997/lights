import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import axios from 'axios/index';
import './Category.css';
import Title from "../../../../../../components/UI/Slogans/Title";

class Category extends Component {
    state = {
        name: 'Category',
        pictures: []
    };

    componentDidMount() {
        const {category, single} = this.props;
        axios.get('api/blog/categories/' + category.id)
            .then(response => {
                const updatedPictures = response.data;
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
        if (this.state.pictures.length !== 0) {
            if (single) {
                content = (
                    <div key={category.id}
                         className={"Category"}
                         onClick={clicked}>
                        <Title
                            name={this.state.name}
                            type={"Category"}
                            styleClass={["FirstLineCategoryTitle",
                                "SecondLineCategoryTitle"]}
                            id={category.id}
                        />
                        {this.state.pictures.map(picture => {
                            return (
                                <div key={picture.id}
                                     className={"Single"}
                                >
                                    <img
                                        src={picture.url}
                                        alt={picture.url}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            } else {
                content = (<div key={category.id}
                                className={"MultipleCategory"}
                                onClick={imageClicked}
                >
                    <Title name={this.state.name}
                           type={"MultipleCategory"}
                           styleClass={"MultipleCategoryTitle"}
                    />
                    <Carousel
                        showArrows
                        emulateTouch
                        infiniteLoop
                        autoPlay
                        interval={2000}
                    >
                        {this.state.pictures.map(picture => {
                            return (
                                <div key={picture.id}
                                     className={"Multiple"}
                                >
                                    <img
                                        src={picture.url}
                                        alt={picture.url}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>)
            }
        }
        return (
            content
        );
    }
}

export default Category;