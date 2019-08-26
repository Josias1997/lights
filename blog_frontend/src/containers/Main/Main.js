import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Gallery from '../../components/Utility/Gallery/Gallery';
import Home from "../../components/Pages/Home/Home";
import Offers from "../../components/Pages/Offers/Offers";
import Blog from "../../components/Pages/Blog/Blog";
import Contact from "../../components/Pages/Contact/Contact";

class Main extends Component {
    render() {
        return (
            <div className={"container"}>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/gallery"} component={() => <Gallery single={false}/>}/>
                    <Route path={"/offers"} component={() => <Offers anotherPage={true}/>}/>
                    <Route path={"/blog"} component={() => <Blog anotherPage={true}/>}/>
                    <Route path={"/contact"} component={Contact}/>
                </Switch>
            </div>
        );
    }
}


export default Main;