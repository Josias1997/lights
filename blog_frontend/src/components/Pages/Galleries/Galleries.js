import React from 'react';
import Gallery from "../../Utility/Gallery/Gallery";

const Galleries = props => {
    const {galleryClicked} = props;
    return (
        <div className="mt-4">
            <Gallery single={true} categoryClicked={galleryClicked}/>
        </div>);
};

export default Galleries;