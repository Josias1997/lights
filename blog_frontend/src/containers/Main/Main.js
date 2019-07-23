import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Gallery from '../../components/Utility/Gallery/Gallery';
import NavBar from "../../components/Navigation/NavBar/NavBar";
import Home from "../../components/Pages/Home/Home";
import Offers from "../../components/Pages/Offers/Offers";
import Blog from "../../components/Pages/Blog/Blog";
import About from "../../components/Pages/About/About";
import styles from './Main.less';
import {connect} from 'react-redux';
import {initArticles, initCategories, initOffers, initPictures, initProfile, toggleNavBar} from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Footer from "../../components/Navigation/Footer/Footer";

class Main extends Component {

    componentDidMount() {
        this.props.onInitPictures();
        this.props.onInitCategories();
        this.props.onInitArticles();
        this.props.onInitOffers();
        this.props.onInitProfile();
    }

    render() {
        let content = <div className={styles.Loader}>
            <p>Veuillez Patientez un instant</p>
            <Loader/>
        </div>;
        const {loading, isOpen, error} = this.props;
        if (loading && !error) {
            content = <div className={!isOpen ? styles.Content : styles.Content + " " + styles.Blur}>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/gallery"} component={() => <Gallery single={false}/>}/>
                    <Route path={"/offers"} component={() => <Offers anotherPage={true}/>}/>
                    <Route path={"/blog"} component={() => <Blog anotherPage={true}/>}/>
                    <Route path={"/about-us"} component={About}/>
                </Switch>
            </div>
        }
        return (
            <React.Fragment>
                <NavBar
                    clicked={this.props.onToggleNavBar}
                />
                <CssBaseLine/>
                <Container>
                    {isOpen ? <div onClick={this.props.onToggleNavBar}>
                        {content}
                    </div> : content
                    }
                </Container>
                { loading && !error ? <Footer/> : null }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen,
        loading: !state.home.loading && !state.blog.loading && !state.offer.loading &&
            !state.about.loading && !state.gallery.loading,
        error: state.home.error || state.blog.error || state.offer.error
            || state.about.error || state.gallery.error,
        pictures: state.home.pictures
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