import React, {useEffect} from 'react';
import Grid from "../../UI/Grid/Grid";
import {connect} from 'react-redux';
import {initOffers} from "../../../store/actions";
import LoadComponent from "../../Utility/LoadComponent/LoadComponent";

const Offers = props => {
    const {loading, error} = props;
    useEffect(() => {
        props.onInitOffers();
    }, []);
    return (
        <LoadComponent loading={loading} error={error}>
            <Grid type={"offers"}/>
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