import React, {Component} from 'react';
import axios from 'axios';
import './Offers.css';
import MyCarousel from "../../../../components/UI/MyCarousel/MyCarousel";

class Offers extends Component {
    state = {
        offers: []
    };

    componentDidMount() {
        axios.get('api/blog/offers')
            .then(response => {
                console.log(response.data);
                let updatedOffers = response.data.reverse();
                this.setState({
                    offers: updatedOffers
                })
            }).catch(error => {
                console.log(error);
        })
    }

    render() {
        return (<div >
            <h1>Offers</h1>
            <div className={"Offers"}>
                <MyCarousel elements={this.state.offers}/>
            </div>
        </div>)
    }
}

export default Offers;