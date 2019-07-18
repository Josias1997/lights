import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Gallery from '../Galleries/Gallery/Gallery';
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Blog from "../Blog/Blog";
import About from "../About/About";
import styles from './Main.less';
import {connect} from 'react-redux';
import {initArticles, initCategories, initOffers, initPictures, initProfile, toggleNavBar} from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'

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
        if (this.props.loading && !this.props.error) {
            content = <div className={!this.props.isOpen ? styles.Content : styles.Content + " " + styles.Blur}>
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
                    {content}
                </Container>
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