import React, {Component} from 'react';
import SimpleCarousel from "../../../components/UI/Carousel/SimpleCarousel";
import Galleries from "./Galleries/Galleries";
import Blog from "./Blog/Blog";
import Offers from "./Offers/Offers";
import './Home.css';
import axios from "axios";
import Modal from "../../../components/UI/Modal/Modal";

class Home extends Component {
    state = {
        pictures: [],
        loading: true
    };
    componentWillMount() {
        axios.get('api/blog/pictures')
            .then(response => {
                let updatedPictures = response.data.slice(0, 9);
                this.setState({pictures: updatedPictures, loading: false});
            }).catch(error => {
                console.log(error);
                this.setState({loading: false});
        });
    }
    handleCategoryClick = name => {
        console.log(name);
    };
    render() {
        return (
            <div>
                <div className={"Home"}>
                    <SimpleCarousel
                        pictures={this.state.pictures}
                        loading={this.state.loading}/>
                </div>
                <Galleries galleryClicked={this.handleCategoryClick}/>
                <Modal/>
                <Blog/>
                <Offers />
            </div>
    )
    }
}

export default Home;