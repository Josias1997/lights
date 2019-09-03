import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import {initCategories, initPictures} from "../../../store/actions";
import LoadComponent from "../../Utility/LoadComponent/LoadComponent";


class Gallery extends Component {

    state = {
        currentCategory: 'all'
    }

    componentDidMount() {
        this.props.onInitCategories();
        this.props.onInitPictures();
    };

    seeCategoryImages = name => {
        this.props.history.push(`/gallery/${name}`);
    }

    filterImages = categoryId => {
        this.setState({
            currentCategory: categoryId
        })
    }
    resetImages = () => {
        this.setState({
            currentCategory: 'all'
        })
    }

    render() {
        const {categories, pictures, loading, error} = this.props;

        return (
            <Fade top>
                <LoadComponent loading={loading} error={error}>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center mb-5">

                        <button type="button" className="btn btn-outline-black waves-effect filter" onClick={
                            () => this.resetImages()
                        }>
                            Toutes les catégories
                        </button>
                        {
                            categories.map(({id, name}) => (
                                <button key={id} type="button" className="btn btn-outline-black waves-effect" onClick={
                                    () => this.filterImages(id)
                                }>
                                    {name}
                                </button>
                            ))
                        }

                    </div>

                </div>
                <div className="row">
                    {
                        this.state.currentCategory === 'all' ? pictures.map(({id, url, title}) => (
                            <div key={id} className={"col-md-4 mt-3"}>
                                <figure className="figure">
                                    <a href={url}>
                                        <img className="img-fluid" src={url} alt={title}/>
                                    </a>
                                    <figcaption className="figure-caption text-right">{title}</figcaption>
                                </figure>
                            </div>
                        )) : pictures.filter(({category}) => (
                            category.id === this.state.currentCategory
                        )).map(({id, url, title}) => (
                            <div key={id} className={"col-md-4 mt-3 fadeIn"}>
                                <figure className="figure">
                                    <a href={url}>
                                        <img className="img-fluid" src={url} alt={title}/>
                                    </a>
                                    <figcaption className="figure-caption text-right">{title}</figcaption>
                                </figure>
                            </div>
                        ))
                    }

                </div>
                </LoadComponent>
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