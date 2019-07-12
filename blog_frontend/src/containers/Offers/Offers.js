import React, {Component} from 'react';
import styles from './Offers.less';
import MyCarousel from "../../components/UI/MyCarousel/MyCarousel";
import Grid from "../../components/UI/Grid/Grid";

class Offers extends Component {
    render() {
        const {anotherPage, clicked} = this.props;
        let content =  <div className={styles.Offers}>
                <MyCarousel
                    title={"Offers"}
                    carouselClicked={clicked}
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

export default Offers;