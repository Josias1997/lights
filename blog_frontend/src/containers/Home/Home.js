import React, {Component} from 'react';
import SimpleCarousel from "../../components/UI/Carousel/SimpleCarousel";
import Galleries from "../Galleries/Galleries";
import Blog from "../Blog/Blog";
import Offers from "../Offers/Offers";
import styles from './Home.less';
import { connect } from 'react-redux';
import CustomModal from "../../components/UI/Modals/CustomModal/CustomModal";
import {
    initPictures, closeModal, openModal
} from "../../store/actions";

class Home extends Component {
    state = {
        type: 'categories'
    };
    componentWillMount() {
        this.props.onInitPictures();
    }
    goToOffers = () => {
        this.props.history.push("/offers");
    };
    gotToBlog = () => {
        this.props.history.push("/blog");
    };

    render() {
        return (
            <div>
                <div className={styles.Home}>
                    <SimpleCarousel
                        banner={true}
                    />
                </div>
                <Galleries galleryClicked={this.props.onOpenModal}/>

                <CustomModal
                    open={this.props.open}
                    close={this.props.onCloseModal}
                    id={this.props.id}
                    type={this.state.type}
                />
                <Blog anotherPage={false} clicked={this.gotToBlog}/>
                <Offers anotherPage={false} clicked={this.goToOffers}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.home.open,
        id: state.home.id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitPictures: () => dispatch(initPictures()),
        onOpenModal: id => dispatch(openModal(id)),
        onCloseModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);