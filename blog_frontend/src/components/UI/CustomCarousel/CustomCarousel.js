import React, { Component } from 'react';
import styles from './CustomCarousel.less';

class CustomCarousel extends Component {
    state = {
        currentImageIndex: 1,
        timer: null,
    };
    componentDidMount() {
        if (this.props.auto === true) {
            this.setState({
                timer: setInterval(this.changeImage, this.props.interval)
            });
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
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
        const customStyle = {
            height: 500 + 'px',
            width: 700 + 'px'
        };
        return(
            <div className={styles.Carousel} onClick={this.changeImage}>
                {this.props.images.map((image, index) => {
                    return (
                        <img
                            key={image.id}
                            alt={image.url}
                            src={image.url}
                            className={(index !== this.state.currentImageIndex - 1 ?
                                style + " " + styles.DisplayNone: style + " " + styles.DisplayBlock) + " img-fluid"
                            }
                            style={{...customStyle}}
                        />
                    )
                })}
            </div>
        )
    }
}
export default CustomCarousel;