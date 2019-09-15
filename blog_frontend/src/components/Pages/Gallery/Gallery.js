import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import {initCategories, initPictures} from "../../../store/actions";
import LoadComponent from "../../Utility/LoadComponent/LoadComponent";
import styles from './Gallery.less';
import Picture from '../../Picture/Picture.js';
import Button from '../../UI/Button/Button.js';
import MyModal from '../../UI/Modal/Modal.js';


class Gallery extends Component {

    state = {
        currentCategory: 'all',
        open: false,
        selectedPictureId: ''
    }

    componentDidMount() {
        this.props.onInitCategories();
        this.props.onInitPictures();
    };

    seeCategoryImages = name => {
        this.props.history.push(`/gallery/${name}`);
    }

    filterImages = categoryId => {
        console.log(categoryId);
        this.setState({
            currentCategory: categoryId
        })
    }
    resetImages = () => {
        this.setState({
            currentCategory: 'all'
        })
    }

    handleClick = (id) => {
        this.setState({
            open: true,
            selectedPictureId: id
        })
    }


    handleClose = () => {
        this.setState({
            open: false,
            selectedPictureId: ''
        })
    }

    render() {
        const {categories, pictures, loading, error} = this.props;

        return (
            <Fade top>
                <LoadComponent loading={loading} error={error}>
                <div className="row">
                    <div className="col-sm-12 mb-5">
                        <Button type="button" styleClasses={"btn btn-rounded waves-effect waves-light btn-" + (this.state.currentCategory === 'all' ?
                        "danger":"outline-red")} click={this.resetImages} value={"Toutes les catégories"}/>
                            
                        {
                            categories.map(({id, name}) => (
                                <Button id={id} key={id} type="button" styleClasses={"btn btn-rounded waves-effect waves-light btn-" + (this.state.currentCategory === id ?
                                "danger":"" )} click={this.filterImages} value={name} />
                            ))
                        }

                    </div>

                </div>
                <div className={styles.gallery}>
                    {
                        this.state.currentCategory === 'all' ? pictures.map(({id, url, title}) => (
                            <Picture id={id} key={id} url={url} title={title} click={this.handleClick}/>
                        )) : pictures.filter(({category}) => (
                            category.id === this.state.currentCategory
                        )).map(({id, url, title}) => (
                            <Picture id={id} key={id} url={url} title={title} click={this.handleClick}/>
                        ))
                    }

                </div>
                </LoadComponent>
                <MyModal onClose={this.handleClose} 
                id={this.state.currentCategory}
                pictureId={this.state.selectedPictureId} 
                open={this.state.open} location="gallery"/>
            </Fade>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.gallery.categories,
        pictures: state.home.pictures,
        error: state.gallery.error || state.home.error,
        loading: !state.gallery.loading && !state.home.loading,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitPictures: () => dispatch(initPictures()),
        onInitCategories: () => dispatch(initCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);