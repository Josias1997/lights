import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Gallery from '../../components/Pages/Gallery/Gallery';
import Home from "../../components/Pages/Home/Home";
import Offers from "../../components/Pages/Offers/Offers";
import Contact from "../../components/Pages/Contact/Contact";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/galerie"} exact component={Gallery}/>
                    <Route path={"/offres"} component={Offers}/>
                    <Route path={"/contact"} component={Contact}/>
                </Switch>
            </div>
        );
    }
}


export default Main;