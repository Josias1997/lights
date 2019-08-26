import React, {Component} from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './CustomCard.less';
import axios from 'axios';
import DropdownForm from "../../DropdownForm/DropdownForm";


class CustomCard extends Component {
    state = {
        formElements: [
            {
                type: 'text',
                label: 'Nom',
                colLength: 12,
                mb: false,
                value: '',
                isValid: false,
            },
            {
                type: 'email',
                label: 'Email',
                colLength: 12,
                mb: false,
                value: '',
                isValid: false
            }
        ],
        status: ''
    };

    checkValidity = (input) => {
        if (input.type === 'text') {
            return input.value.length >= 3;
        }
        if (input.type === 'email') {
            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(String(input.value).toLocaleLowerCase());
        }
    };

    sendReservation = () => {
        let validity = true;
        this.state.formElements.forEach(element => {
            if (!element.isValid) {
                this.changeStatus(element);
                validity = false;
            }
        });
        if (validity) {
            const datas = {};
            this.state.formElements.forEach(element => {
                datas[element.id] = element.value;
            });
            axios.post('api/blog/offers/create-reservation', datas)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    };

    onChange = event => {
        const {value, id} = event.target;
        const elements = [...this.state.formElements];
        elements.forEach(element => {
            if (element.id === id) {
                element.value = value;
                element.isValid = this.checkValidity(element);
            }
        });
        this.setState({
            formElements: elements
        })
    };

    render() {
        const {card, single} = this.props;
        const {id, title, url, price} = card;
        let content = null;
        if (!single) {
            const {handleClick} = this.props;
            let truncatedContent = truncate(card.content, 50, null);
            content = <div className={styles.Card} onClick={() => handleClick(id)}>
                <div className="card ml-4 mt-4">
                    <div className="view overlay">
                        <img className="card-img-top"
                             src={url}
                             alt={title}/>
                            <a href="#" onClick={() => handleClick(id)}>
                                <div className="mask rgba-white-slight">
                                </div>
                            </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{title + " " + price}</h4>
                        <p className="card-text">{truncatedContent}</p>
                        <a href="#" className="btn btn-primary" onClick={() => handleClick(id)}>Détails</a>
                    </div>

                </div>
            </div>
        } else {
            content = <div className={"container"}>
                <div className={"view"}>
                    <img src={url} alt={url} className={"img-fluid"}/>
                    <div className={"pattern1 flex-center"}>
                        <p className={"white-text"}>{title}</p>
                    </div>
                </div>
                <div className={"container"}>
                    <h3 className={"badge badge-primary"}>Prix: {price}</h3>
                    <p className={"text-justify"}>{card.content}</p>
                </div>
                <DropdownForm submit={this.sendReservation}
                              change={this.onChange}
                              elements={this.state.formElements}
                />
            </div>
        }
        return (
            content
        );
    }

}

export default CustomCard;

