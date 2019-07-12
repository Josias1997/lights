import React from 'react';
import {connect} from 'react-redux';
import CustomCarousel from '../../CustomCarousel/CustomCarousel';

const HomeModalContent = ({pictures, id}) => {
    let categoryPictures = pictures.filter(picture => (
        picture.category.id === id
    ));
    return (
        <div>
            <CustomCarousel images={categoryPictures} auto={true} interval={2000}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        pictures: state.home.pictures
    }
};

export default connect(mapStateToProps)(HomeModalContent);