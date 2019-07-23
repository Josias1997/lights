import React, {Component} from 'react';
import SimpleCarousel from "../../UI/Slider/Slider";
import Galleries from "../Galleries/Galleries";
import Blog from "../Blog/Blog";
import Offers from "../Offers/Offers";
import styles from './Home.less';
import {connect} from 'react-redux';
import MyModal from "../../UI/MyModal/MyModal";
import {
    closeModal, openModal
} from "../../../store/actions";

class Home extends Component {
    state = {
        type: 'categories'
    };
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
                {this.props.isOpen ? <Galleries/> :
                    <Galleries galleryClicked={this.props.onOpenModal}/>
                }

                <MyModal
                    open={this.props.open}
                    close={this.props.onCloseModal}
                    id={this.props.id}
                    type={this.state.type}
                />
                {/*<div>*/}
                {/*     <h1>Derniers articles</h1>*/}
                {/*</div>*/}
                <div className={styles.LastContents}>
                    <Blog anotherPage={false} clicked={this.gotToBlog}/>
                    <Offers anotherPage={false} clicked={this.goToOffers}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen,
        open: state.home.open,
        id: state.home.id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOpenModal: id => dispatch(openModal(id)),
        onCloseModal: () => dispatch(closeModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);