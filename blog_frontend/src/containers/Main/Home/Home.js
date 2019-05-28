import React, {Component} from 'react';
import SimpleCarousel from "../../../components/UI/Carousel/SimpleCarousel";
import Galleries from "./Galleries/Galleries";
import Blog from "./Blog/Blog";
import Offers from "./Offers/Offers";
import './Home.css';
import axios from "axios";
import CustomModal from "../../../components/UI/Modals/CustomModal/CustomModal";

class Home extends Component {
    state = {
        pictures: [],
        loading: true,
        open: false,
        selectedId: ''
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
        homeState.selectedId = id;
        this.setState({
            ...homeState
        });
    };
    onCloseCategoryModal = () => {
        const homeState = this.state;
        homeState.open = false;
        homeState.selectedId = '';
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
                        loading={this.state.loading}
                        banner={true}
                    />
                </div>
                <Galleries galleryClicked={this.onOpenCategoryModal}/>

                <CustomModal
                    open={this.state.open}
                    close={this.onCloseCategoryModal}
                    id={this.state.selectedId}
                    type={'pictures'}
                />
                <Blog anotherPage={false}/>
                <Offers anotherPage={false}/>
            </div>
        )
    }
}

export default Home;