import React, {Component} from 'react';
import Gallery from "./Gallery/Gallery";

class Galleries extends Component {
    render() {
        const {galleryClicked} = this.props;
        return (
            <div>
                <h1>Galleries</h1>
                <div className={"Galleries"}>
                    <Gallery single={true} categoryClicked={galleryClicked}/>
                </div>
        </div>);
    }
}

export default Galleries;