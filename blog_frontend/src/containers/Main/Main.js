import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Gallery from '../../components/Utility/Gallery/Gallery';
import Home from "../../components/Pages/Home/Home";
import Offers from "../../components/Pages/Offers/Offers";
import Blog from "../../components/Pages/Blog/Blog";
import Contact from "../../components/Pages/Contact/Contact";
import {connect} from 'react-redux';
import {initArticles, initCategories, initOffers, initPictures, initProfile, toggleNavBar} from "../../store/actions";

class Main extends Component {

    componentDidMount() {
        this.props.onInitPictures();
        this.props.onInitCategories();
        this.props.onInitOffers();
        this.props.onInitProfile();
        this.props.onInitArticles();
    }

    render() {
        let content = <div className={"spinner-border text-primary"}>
                <span className={"sr-only"}>Loading...</span>
            </div>
        const {loading, error} = this.props;
        if (loading && !error) {
            content = <div>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/gallery"} component={() => <Gallery single={false}/>}/>
                    <Route path={"/offers"} component={() => <Offers anotherPage={true}/>}/>
                    <Route path={"/blog"} component={() => <Blog anotherPage={true}/>}/>
                    <Route path={"/about-us"} component={Contact}/>
                </Switch>
            </div>
        }
        return (
            <React.Fragment>
                    <div>
                        {content}
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen,
        loading: !state.home.loading && !state.offer.loading && !state.blog.loading &&
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
        onInitProfile: () => dispatch(initProfile()),
        onInitOffers: () => dispatch(initOffers()),
        onInitArticles: () => dispatch(initArticles())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);