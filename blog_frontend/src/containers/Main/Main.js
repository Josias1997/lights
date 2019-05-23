import React, {Component} from 'react';
import { Route } from "react-router";
import Gallery from './Home/Galleries/Gallery/Gallery';
import NavBar from "../../components/NavBar/NavBar";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Home from "./Home/Home";
import Offers from "./Home/Offers/Offers";
import Blog from "./Home/Blog/Blog";

class Main extends Component {
    state = {
        links : [
            {value: 'LightsPhotography', link: '/'},
            {value: 'Gallery', link: '/gallery'},
            {value: 'Offers', link: '/offers'},
            {value: 'Blog', link: '/blog'},
            {value: 'About Us', link: '/about-us'}
        ]
    };
    render() {
        return (
                <Aux>
                    <nav>
                        <NavBar links={this.state.links}/>
                    </nav>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/gallery"} component={() => <Gallery single={false}/>} />
                    <Route path={"/offers"} component={() => <Offers anotherPage={true}/>} />
                    <Route path={"/blog"} component={Blog} />
                </Aux>
        );
    }
}

export default Main;