import React from 'react';
import styles from './Offers.less';
import MyCarousel from "../../UI/ContribCarousel/ContribCarousel";
import Grid from "../../UI/Grid/Grid";

const Offers = props => {
    const {anotherPage, clicked} = props;
    let content = <div className={styles.Offers}>
        <MyCarousel
            title={"Offers"}
            carouselClicked={clicked}
        />
    </div>;
    if (anotherPage) {
        content = <Grid type={"offers"}/>
    }
    return (
        content
    )
};

export default Offers;