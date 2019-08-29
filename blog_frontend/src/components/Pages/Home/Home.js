import React, {Component} from 'react';
import SimpleCarousel from "../../UI/Slider/Slider";
import Galleries from "../Galleries/Galleries";
import Blog from "../Blog/Blog";
import Offers from "../Offers/Offers";
import styles from './Home.less';
import {connect} from 'react-redux';
import MyModal from "../../UI/MyModal/MyModal";
import {
    closeModal, initArticles, initCategories, initOffers, initPictures, openModal
} from "../../../store/actions";
import LoadComponent from "../../Utility/LoadComponent/LoadComponent";

class Home extends Component {
    state = {
        type: 'categories'
    };
    componentDidMount() {
        this.props.onInitPictures();
        this.props.onInitCategories();
        this.props.onInitOffers();
        this.props.onInitArticles();
    }
    goToOffers = () => {
        this.props.history.push("/offers");
    };
    gotToBlog = () => {
        this.props.history.push("/blog");
    };

    render() {
        const {loading, error} = this.props;
        return (
            <LoadComponent loading={loading} error={error}>
                <div className={styles.Home}>
                    <SimpleCarousel
                        banner={true}
                    />
                </div>
                <Galleries galleryClicked={this.props.onOpenModal}/>
                <MyModal
                    open={this.props.open}
                    close={this.props.onCloseModal}
                    id={this.props.id}
                    type={this.state.type}
                />
                <div className={styles.LastContents}>
                    <Blog clicked={this.gotToBlog}/>
                    <Offers anotherPage={false} clicked={this.goToOffers}/>
                </div>
            </LoadComponent>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.home.open,
        id: state.home.id,
        loading: !state.home.loading && !state.offer.loading && !state.blog.loading &&
            !state.gallery.loading,
        error: state.home.error || state.blog.error || state.offer.error || state.gallery.error,
        pictures: state.home.pictures
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenModal: id => dispatch(openModal(id)),
        onCloseModal: () => dispatch(closeModal()),
        onInitPictures: () => dispatch(initPictures()),
        onInitCategories: () => dispatch(initCategories()),
        onInitOffers: () => dispatch(initOffers()),
        onInitArticles: () => dispatch(initArticles())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);