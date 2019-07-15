import React, {Component} from 'react';
import {Route} from "react-router";
import Gallery from '../Galleries/Gallery/Gallery';
import NavBar from "../../components/NavBar/NavBar";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Blog from "../Blog/Blog";
import About from "../About/About";
import styles from './Main.less';
import {connect} from 'react-redux';
import {initArticles, initCategories, initOffers, initPictures, initProfile, toggleNavBar} from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";

class Main extends Component {
    componentDidMount() {
        this.props.onInitPictures();
        this.props.onInitCategories();
        this.props.onInitArticles();
        this.props.onInitOffers();
        this.props.onInitProfile();
    }

    render() {
        let content = <div className={styles.Container}>
            <div className={styles.Loader}>
                <p>Veuillez Patientez un instant</p>
                <Loader/>
            </div>
        </div>;
        if (this.props.loading && !this.props.error) {
            content = <div className={!this.props.isOpen ? styles.Container : styles.Container + " " + styles.Blur}>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/gallery"} component={() => <Gallery single={false}/>}/>
                <Route path={"/offers"} component={() => <Offers anotherPage={true}/>}/>
                <Route path={"/blog"} component={() => <Blog anotherPage={true}/>}/>
                <Route path={"/about-us"} component={About}/>
            </div>
        }
        return (
            <Aux>
                <NavBar
                    clicked={this.props.onToggleNavBar}
                />
                {content}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen,
        loading: !state.home.loading && !state.blog.loading && !state.offer.loading &&
            !state.about.loading && !state.gallery.loading,
        error: state.home.error || state.blog.error || state.offer.error
            || state.about.error || state.gallery.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavBar: () => dispatch(toggleNavBar()),
        onInitPictures: () => dispatch(initPictures()),
        onInitCategories: () => dispatch(initCategories()),
        onInitArticles: () => dispatch(initArticles()),
        onInitProfile: () => dispatch(initProfile()),
        onInitOffers: () => dispatch(initOffers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);