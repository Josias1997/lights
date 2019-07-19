import React, { Component } from 'react';
import CustomCard from "../Grid/CustomCard/CustomCard";
import styles from "../CustomCarousel/CustomCarousel.less";


class Slider extends Component {
    state = {
        currentDivIndex: 1,
        timer: null
    };
    componentDidMount() {
        if (this.props.auto === true) {
            this.setState({
                timer: setInterval(this.changeDiv, this.props.interval)
            });
        }
    }

    changeDiv = () => {
         let slides = document.getElementsByClassName(styles.Slides);
         this.setState(prevState => {
             if (prevState.currentDivIndex === slides.length) {
                return {
                    currentDivIndex: 1
                }
            }
            return {
                currentDivIndex: prevState.currentDivIndex + 1
            }
        })
    };

    render() {
        return(
            <div>
                {this.props.elements.map(element => {
                    return (
                        <div className={styles.Slides}>
                            Frame 1
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Slider;