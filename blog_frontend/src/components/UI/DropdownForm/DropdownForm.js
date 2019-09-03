import React, {Component} from 'react';
import Input from "../Input/Input";
import axios from "axios";
import CSRFToken from "../../Utility/CSRFToken/CSRFToken";


class DropdownForm extends Component {
    state = {
        formElements: [
            {
                type: 'text',
                id: 'name',
                label: 'Nom',
                colLength: 12,
                mb: false,
                value: '',
                isValid: false,
            },
            {
                type: 'email',
                id: 'email',
                label: 'Email',
                colLength: 12,
                mb: false,
                value: '',
                isValid: false
            }
        ],
        status: '',
        loading: false
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

    sendReservation = (id) => {
        let validity = true;
        this.state.formElements.forEach(element => {
            if (!element.isValid) {
                this.changeStatus(element);
                validity = false;
            }
        });
        if (validity) {
            const datas = {
                id: id
            };
            this.state.formElements.forEach(element => {
                datas[element.id] = element.value;
            });
            this.setState({
                loading: true
            });
            axios.defaults.xsrfCookieName = 'csrftoken';
            axios.defaults.xsrfHeaderName = 'X-CSRFToken';
            axios.post('/api/blog/offers/create-reservation', datas)
                .then(response => {
                    console.log(response);
                    this.setState({
                        status: "Réservation éffectuée",
                        loading: false
                    })
                })
                .catch(error => {
                    this.setState({
                        status: error,
                        loading: false
                    })
                })
        }
    };

    onChange = event => {
        const {value, id} = event.target;
        const elements = [...this.state.formElements];
        elements.forEach(element => {
            if (element.id === id) {
                console.log("Ok");
                element.value = value;
                element.isValid = this.checkValidity(element);
            }
        });
        this.setState({
            formElements: elements
        })
    };
    render() {
        const {offerId} = this.props;
    return (
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Réserver
            </a>

            <div className="dropdown-menu">
                <form className="px-4 py-3">
                    <CSRFToken/>
                    {this.state.formElements.map(element => {
                        return <Input id={element.id} key={element.label} label={element.label}
                                      change={this.onChange}
                                      mb={element.mb}
                                      type={element.type}
                                      value={element.value}
                        />
                    })}
                    {
                        this.state.loading ? <div className={"spinner-border text-danger"}>
                                    <span className={"sr-only"}>...</span>
                                </div>: <button type="submit" className="btn btn-primary"
                                                onClick={() => this.sendReservation(offerId)}>Valider</button>
                    }
                    {
                    this.state.status !== '' ? <div className="alert alert-info ml-2">
                        Réservation effectuée
                </div>:null
                }
                </form>
            </div>
        </div>
    )
    }
}

export default DropdownForm;