import React, { Component } from 'react';
import styles from './CustomCarousel.less';

class CustomCarousel extends Component {
    state = {
        currentImageIndex: 1
    };
    componentDidMount() {
        if (this.props.auto === true) {
            setInterval(this.changeImage, this.props.interval)
        }
    }

    changeImage = () => {
        let slides = document.getElementsByClassName(styles.Slides);
        this.setState(prevState => {
            if (prevState.currentImageIndex === slides.length) {
                return {
                    currentImageIndex: 1
                }
            }
            return {
                currentImageIndex: prevState.currentImageIndex + 1
            }
        })
    };

    render() {
        let style = styles.Slides;
        return(
            <div className={styles.Carousel} onClick={this.changeImage}>
                {this.props.images.map((image, index) => {
                    return (
                        <img
                            alt={image.url}
                            src={image.url}
                            className={index !== this.state.currentImageIndex - 1 ?
                                style + " " + styles.DisplayNone: style + " " + styles.DisplayBlock
                            }
                        />
                    )
                })}
            </div>
        )
    }
}
export default CustomCarousel;