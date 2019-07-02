import React, {Component} from 'react';
import Modal from 'react-responsive-modal'
import axios from 'axios/index';
import Card from "../../Grid/Card/Card";
import CustomCarousel from "../../CustomCarousel/CustomCarousel";

class CustomModal extends Component {
    state = {
        elements: [],
        loading: true
    };

    componentDidUpdate() {
        const {id, type} = this.props;
        if (id !== '') {
            axios.get('api/blog/' + type + '/' + id)
                .then(response => {
                    let updatedElements = '';
                    if (type === 'offers' || type === 'articles') {
                        updatedElements = response.data
                    } else {
                        updatedElements = response.data.reverse();
                    }
                    this.setState({
                        elements: updatedElements,
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
        const {open, close, type} = this.props;
        let content = null;
        if (type === 'offers' || type === 'articles') {
            content = <Card card={this.state.elements} single={true}/>
        }
        else if (type === 'categories') {
            content = <CustomCarousel images={this.state.elements} auto={true} interval={2000}/>
        }
        return (
            <Modal
                open={open}
                onClose={close}
                center
            >
                {content}
            </Modal>
        )
    }
}

export default CustomModal;