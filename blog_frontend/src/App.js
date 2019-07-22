import React, {Component} from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.less';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Main from "./containers/Main/Main";

library.add(faHome);

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Main/>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;