import React, {Component} from 'react';
import Modal from 'react-responsive-modal'
import axios from 'axios/index';
import './CustomModal.css';
import SimpleCarousel from "../../Carousel/SimpleCarousel";
import Card from "../../Grid/Card/Card";

class CustomModal extends Component {
    state = {
        elements: [],
        loading: true
    };
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    return this.props.open && this.props.id !== '';
    // }

    componentDidUpdate() {
        const {id, type} = this.props;
        if (id !== '') {
            axios.get('api/blog/' + type)
                .then(response => {
                    let updatedElements = '';
                    if (type === 'offers' || type === 'articles') {
                        updatedElements = response.data.filter(element => {
                            return element.id === id;
                        })[0]
                    } else {
                        updatedElements = response.data.filter(picture => {
                            return picture.category.id === id;
                        }).reverse();
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
        const {open, close} = this.props;
        let content = null;
        if (this.props.type === 'offers' || this.props.type === 'articles') {
            content = <Card card={this.state.elements} single={true}/>
        }
        else {
            content = <SimpleCarousel
            pictures={this.state.elements}
            loading={this.state.loading}
            banner={false}
        />;
        }
        return (
            <Modal
                open={open}
                onClose={close}
                center
            >
                <div className={"CustomModal"}>
                    {content}
                </div>
            </Modal>
        )
    }
}

export default CustomModal;