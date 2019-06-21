import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "./Slider.less";

class Slider extends Component {
    render() {
        const images = this.props.images.map(picture => {
            return {
                original: picture.url,
            };
        });
        return (
            <ImageGallery items={images} />
        )
    }
}
export default Slider;