import React, {Component} from 'react';
import { Route } from "react-router";
import Gallery from './Home/Galleries/Gallery/Gallery';
import NavBar from "../../components/NavBar/NavBar";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Home from "./Home/Home";
import Offers from "./Home/Offers/Offers";
import Blog from "./Home/Blog/Blog";
import About from "../About/About";
import styles from './Main.less';

class Main extends Component {
    state = {
        links : [
            {value: 'LightsPhotography', link: '/'},
            {value: 'Gallery', link: '/gallery'},
            {value: 'Offers', link: '/offers'},
            {value: 'Blog', link: '/blog'},
            {value: 'About Us', link: '/about-us'}
        ],
        isOpen: false
    };

    toggleNavBar = () => {
        this.setState( prevState => ({
            isOpen: window.innerWidth <= 550 ? !prevState.isOpen:false
        }))
    };
    closeNavBar = () => {
        this.setState({
            isOpen: false
        })
    };
    render() {
        console.log("Home render");
        return (
                <Aux>
                       <NavBar
                           links={this.state.links}
                           open={this.state.isOpen}
                           clicked={this.toggleNavBar}
                       />
                    <div className={!this.state.isOpen ? styles.Container: styles.Container + " " + styles.Blur }>
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

export default Main;