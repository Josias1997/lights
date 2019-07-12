import React, {Component} from 'react';
import { Route } from "react-router";
import Gallery from '../Galleries/Gallery/Gallery';
import NavBar from "../../components/NavBar/NavBar";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Blog from "../Blog/Blog";
import About from "../About/About";
import styles from './Main.less';
import { connect } from 'react-redux';
import {toggleNavBar} from "../../store/actions";

class Main extends Component {
    render() {
        return (
                <Aux>
                       <NavBar
                           clicked={this.props.onToggleNavBar}
                       />
                    <div className={!this.props.isOpen ? styles.Container: styles.Container + " " + styles.Blur }>
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/gallery"} component={() => <Gallery single={false}/>} />
                        <Route path={"/offers"} component={() => <Offers anotherPage={true}/>} />
                        <Route path={"/blog"} component={() => <Blog anotherPage={true}/>} />
                        <Route path={"/about-us"} component={About}/>
                    </div>
                </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavBar: () => dispatch(toggleNavBar())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);