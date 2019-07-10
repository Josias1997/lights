import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './Category.less';
import { connect } from 'react-redux';
import Title from "../../../../components/UI/Slogans/Title/Title";
import {initCategoryPictures} from "../../../../store/actions";
import axios from "axios";

class Category extends Component {
    componentDidMount() {
        const {category, single} = this.props;
        this.props.onInitCategoryPictures(category, single);
        axios.get('api/blog/categories/' + category.id)
            .then(response => {
                 this.setState({

                 })
            }).catch(error => {
        })
    }

    render() {
        const {category, single, clicked, imageClicked} = this.props;
        let content = null;
        console.log("Pictures", this.props.pictures);
        if (this.props.pictures.length !== 0) {
            if (single) {
                content = (
                    <div key={category.id}
                         className={styles.Category}
                         onClick={clicked}>
                        <Title
                            name={this.props.name}
                            type={"Category"}
                            styleClass={[styles.FirstLineCategoryTitle,
                                styles.SecondLineCategoryTitle]}
                            id={category.id}
                        />
                        {this.props.pictures.map(picture => {
                            return (
                                <div key={picture.id}
                                     className={styles.Single}
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
                                className={styles.MultipleCategory}
                                onClick={imageClicked}
                >
                    <Title name={this.props.name}
                           type={"MultipleCategory"}
                           styleClass={styles.MultipleCategoryTitle}
                    />
                    <Carousel
                        showArrows
                        emulateTouch
                        infiniteLoop
                        autoPlay
                        interval={2000}
                    >
                        {this.props.pictures.map(picture => {
                            return (
                                <div key={picture.id}
                                     className={styles.Multiple}
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
const mapStateToProps = state => {
    return {
        name: state.category.name,
        pictures: state.category.pictures,
        error: state.category.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitCategoryPictures: (category, single) => dispatch(initCategoryPictures(category, single))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);