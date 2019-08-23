import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from './Slider.less';
import Slogan from "../Slogan/Slogan";
import {connect} from 'react-redux';
import Roll from "react-reveal/Roll";

const Slider = props => {
    {/*<Carousel*/
    }
    {/*    showArrows*/
    }
    {/*    emulateTouch*/
    }
    {/*    infiniteLoop*/
    }
    {/*    autoPlay*/
    }
    {/*    interval={2000}*/
    }
    {/*>*/
    }
    {/*    {props.pictures.map(picture => (*/
    }
    {/*        <div key={picture.id}>*/
    }
    {/*            <img src={picture.url} alt={picture.url}/>*/
    }
    {/*        </div>*/
    }
    {/*    ))}*/
    }
    let content = <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">

            {props.pictures.map((picture, index) => (
                <li key={picture.id} data-target="myCarousel" data-slide-to={index} className={index === 0 ? "active":""}>

                </li>
            ))}
        </ol>
        <div className="carousel-inner" role="listbox">
            {props.pictures.map((picture, index) => {
                return (
                    <div key={picture.id} className={index === 0 ? "carousel-item active":"carousel-item"}>
                        <div className="view">
                            <img className="d-block w-100"
                                 src={picture.url}
                                 alt={picture.title}/>
                        </div>
                    </div>
                );
            })}
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">

                </span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">

                </span>
            <span className="sr-only">Next</span>
        </a>
    </div>;
    // </Carousel>;
    let slogan = null;
    if (props.banner && props.pictures.length !== 0) {
        slogan = <Slogan title={"Lights Photography"}
                         subtitle={"\"Parce que vos instants ont de la valeur pour nous\""}
        />
    }
    return (
        <div className={styles.Carousel}>
            {slogan}
            {content}
        </div>
    )
};
const mapStateToProps = state => {
    return {
        pictures: state.home.pictures,
    }
};

export default connect(mapStateToProps)(Slider);