import React, {useEffect} from 'react';
import styles from './Offers.less';
import MyCarousel from "../../UI/ContribCarousel/ContribCarousel";
import Grid from "../../UI/Grid/Grid";
import {connect} from 'react-redux';
import {initOffers} from "../../../store/actions";
import LoadComponent from "../../Utility/LoadComponent/LoadComponent";

const Offers = props => {
    const {anotherPage, clicked, loading, error} = props;
    useEffect(() => {
        props.onInitOffers();
    }, []);
    return (
        <LoadComponent loading={loading} error={error}>
            {anotherPage ? <Grid type={"offers"}/> : <div className={"col-md-6 mt-2"}>
        <MyCarousel
            title={"Offers"}
            carouselClicked={clicked}
        />
    </div>}
        </LoadComponent>
    )
};

const mapStateToProps = state => {
    return {
        error: state.offer.error,
        loading: !state.offer.loading,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitOffers: () => dispatch(initOffers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);