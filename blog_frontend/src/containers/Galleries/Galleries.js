import React, {Component} from 'react';
import Gallery from "./Gallery/Gallery";

class Galleries extends Component {
    render() {
        const {galleryClicked} = this.props;
        return (
            <div>
                <h1>Gallerie</h1>
                <Gallery single={true} categoryClicked={galleryClicked}/>
            </div>);
    }
}

export default Galleries;