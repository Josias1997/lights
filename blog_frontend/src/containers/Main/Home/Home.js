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
        selectedId: '',
        type: 'categories'
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
    onOpenModal = (id) => {
        console.log(id);
        const homeState = {
            ...this.state
        };
        homeState.open = true;
        homeState.selectedId = id;
        this.setState({
            ...homeState
        });
    };
    onCloseModal = () => {
        const homeState = {
            ...this.state
        };
        homeState.open = false;
        homeState.selectedId = '';
        this.setState({
            ...homeState
        });
    };
    goToOffers = () => {
        this.props.history.push("/offers");
    };
    gotToBlog = () => {
        this.props.history.push("/blog");
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
                <Galleries galleryClicked={this.onOpenModal}/>

                <CustomModal
                    open={this.state.open}
                    close={this.onCloseModal}
                    id={this.state.selectedId}
                    type={this.state.type}
                />
                <Blog anotherPage={false} clicked={this.gotToBlog}/>
                <Offers anotherPage={false} clicked={this.goToOffers}/>
            </div>
        )
    }
}

export default Home;