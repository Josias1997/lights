import React, {Component} from 'react';
import SimpleCarousel from "../../../components/UI/Carousel/SimpleCarousel";
import Galleries from "./Galleries/Galleries";
import Blog from "./Blog/Blog";
import Offers from "./Offers/Offers";
import './Home.css';
import axios from "axios";
import CategoryModal from "../../../components/UI/CategoryModal/CategoryModal";

class Home extends Component {
    state = {
        pictures: [],
        loading: true,
        open: false,
        currentId: ''
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
    onOpenCategoryModal = id => {
        console.log(id);
        const homeState = this.state;
        homeState.open = true;
        homeState.currentId = id;
        this.setState({
            ...homeState
        });
    };
    onCloseCategoryModal = () => {
        const homeState = this.state;
        homeState.open = false;
        homeState.currentId = '';
        this.setState({
            ...homeState
        })
    };
    render() {
        return (
            <div>
                <div className={"Home"}>
                    <SimpleCarousel
                        pictures={this.state.pictures}
                        loading={this.state.loading}/>
                </div>
                <Galleries galleryClicked={this.onOpenCategoryModal}/>

                <CategoryModal
                    open={this.state.open}
                    close={this.onCloseCategoryModal}
                    id={this.state.currentId}
                />
                <Blog/>
                <Offers />
            </div>
        )
    }
}

export default Home;