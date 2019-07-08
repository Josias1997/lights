import React, {Component} from 'react';
import styles from './Offers.less';
import MyCarousel from "../../components/UI/MyCarousel/MyCarousel";
import Grid from "../../components/UI/Grid/Grid";
import { initOffers } from "../../store/actions";
import { connect } from "react-redux";

class Offers extends Component {

    componentDidMount() {
        this.props.onInitOffers();
    }

    render() {
        const {anotherPage, clicked} = this.props;
        let content =  <div className={styles.Offers}>
                <MyCarousel
                    title={"Offers"}
                    carouselClicked={clicked}
                    loading={this.props.loading}
                />
            </div>;
        if(anotherPage) {
            content = <Grid type={"offers"}/>
        }
        return (
            content
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.offer.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitOffers: () => dispatch(initOffers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);