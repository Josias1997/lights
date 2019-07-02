import React, { Component } from 'react';
import Category from './Category/Category';
import Roll from 'react-reveal/Roll';
import styles from './Gallery.less';
import { connect } from 'react-redux';
import {
    initCategories
} from "../../../../../store/actions";

class Gallery extends Component {
    componentDidMount() {
        this.props.onInitCategories();
    }
    handleImageClick = id => {
        console.log(id);
    };
    render() {
        const {single, categoryClicked} = this.props;
        let content = <p>Loading</p>;
        if(this.props.categories) {
            content =  this.props.categories.map(category => {
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
                <div className={single ? styles.Gallery:styles.Slider}>
                    {content}
                </div>
            </Roll>
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.gallery.categories,
        error: state.gallery.error,
        loading: state.gallery.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitCategories: () => dispatch(initCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);