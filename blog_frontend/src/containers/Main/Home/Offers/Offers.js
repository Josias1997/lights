import React, {Component} from 'react';
import axios from 'axios';
import './Offers.css';
import MyCarousel from "../../../../components/UI/MyCarousel/MyCarousel";

class Offers extends Component {
    state = {
        offers: [],
        loading: true
    };

    componentDidMount() {
        axios.get('api/blog/offers')
            .then(response => {
                let updatedOffers = response.data.reverse();
                this.setState({
                    offers: updatedOffers,
                    loading: false
                })
            }).catch(error => {
                console.log(error);
        })
    }

    render() {
        let content =  <div className={"Offers"}>
                <MyCarousel elements={this.state.offers} title={"Offers"}/>
            </div>;
        if(this.props.anotherPage) {
            content = <div>Offers</div>
        }
        return (
            content
        )
    }
}

export default Offers;