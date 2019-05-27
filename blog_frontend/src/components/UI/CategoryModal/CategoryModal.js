import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import './CategoryModal.css';
import SimpleCarousel from "../Carousel/SimpleCarousel";

class CategoryModal extends Component {
    state = {
        pictures: [],
        loading: true
    };
   // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    return this.props.open && this.props.id !== '';
   // }

    componentDidUpdate() {
        const {id} = this.props;
        if(id !== '') {
            axios.get('api/blog/pictures')
            .then(response => {
                console.log(response);
                let updatedPictures = response.data.filter(picture => {
                    return picture.category.id === id;
                }).reverse();
                this.setState({
                    pictures: updatedPictures,
                    loading: false
                });
            }).catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                })
        })
        }
    }

    render() {
        const {open, close} = this.props;
        return(
            <Modal
                open={open}
                onClose={close}
                center
                animationDuration={1000}
            >
                <div className={"CategoryModal"}>
                    <SimpleCarousel
                        pictures={this.state.pictures}
                        loading={this.state.loading}
                    />
                </div>
            </Modal>
    )
    }
}
export default CategoryModal;