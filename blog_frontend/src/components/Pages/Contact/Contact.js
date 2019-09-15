import React, {Component} from 'react';
import Input from "../../UI/Input/Input";
import axios from 'axios';
import CSRFToken from "../../Utility/CSRFToken/CSRFToken";
import LoadComponent from '../../Utility/LoadComponent/LoadComponent';

class Contact extends Component {

    state = {
        formElements: [
            {
                type: 'text',
                id: 'name',
                label: 'Nom',
                colLength: 6,
                mb: true,
                value: '',
                isValid: false,
            },
            {
                type: 'email',
                id: 'email',
                label: 'Email',
                colLength: 6,
                mb: true,
                value: '',
                isValid: false,
            },
            {
                type: 'text',
                id: 'subject',
                label: 'Sujet',
                colLength: 12,
                mb: true,
                value: '',
                isValid: false
            },
            {
                type: 'textarea',
                id: 'message',
                label: 'Votre message',
                colLength: 12,
                mb: false,
                value: '',
                isValid: false
            },
        ],
        status: '',
        loading: false,
        phone: '',
        address: '',
        email: '',
        loadingData: true,
        error: false,
    };
    componentDidMount() {
        axios.get('/api/blog/home/')
        .then(response => {
            this.setState({
                phone: response.data[0].phone,
                address: response.data[0].address,
                email: response.data[0].email,
                loadingData: false,
            })
        }).catch(error => {
            this.setState({
                loadingData: false,
                error: true
            })
        })
    }
    checkValidity = (input) => {
        if (input.type === 'text') {
            return input.value.length >= 3;
        }
        if (input.type === 'email') {
            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(String(input.value).toLocaleLowerCase());
        }
        if (input.type === 'textarea') {
            return input.value.length >= 10;
        }
    };

    onSubmitForm = () => {
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
            axios.defaults.xsrfCookieName = 'csrftoken';
            axios.defaults.xsrfHeaderName = 'X-CSRFToken';
            this.setState({
                loading: true
            });
            axios.post('/api/blog/contact', datas)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        status: response.data,
                        loading: false,
                    });
                }).catch(error => {
                    this.setState({
                        status: "Votre message a été transmis avec succès. Veuillez consulter votre mail pour plus d'informations",
                        loading: false
                    });
            })
        }
    };

    onChange = (event) => {
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
    changeStatus = element => {
        let status = '';
        if (element.type === 'email') {
            status += 'Email Invalide \n'
        }
        if (element.type === 'text') {
            status += 'Nom ou Sujet trop court (Minimum 3 caractères)\n';
        }
        if (element.type === 'textarea') {
            status += 'Message trop court (Minimum 10 caractères)\n';
        }
        this.setState({
            status: status
        });
        status = '';
    };

    render() {
        const {loadingData, error, phone, address, email} = this.state;
        return (
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Me contacter</h2>
                <p className="text-center w-responsive mx-auto mb-5">Avez vous des questions? N'hésitez pas à me
                    contacter
                    directement.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" method="POST" className={"needs-validation"}>
                            <CSRFToken/>
                            <div className="row">
                                {this.state.formElements.filter(element => (element.colLength === 6)).map(input => {
                                    return (
                                        <Input type={input.type} key={input.id}
                                               id={input.id}
                                               label={input.label}
                                               colLength={input.colLength}
                                               mb={input.mb}
                                               change={this.onChange}
                                               value={input.value}
                                        />
                                    );
                                })}

                            </div>
                            {this.state.formElements.filter(element => (element.colLength === 12)).map(input => {
                                return (
                                    <div className="row" key={input.id}>
                                        <Input type={input.type} id={input.id} label={input.label}
                                               colLength={12}
                                               mb={input.mb}
                                               change={this.onChange}
                                               value={input.value}
                                        />
                                    </div>
                                )
                            })}
                        </form>
                        {this.state.loading ? <div className={"spinner-border text-danger"}>
                                    <span className={"sr-only"}>...</span>
                                </div>:<div className="text-center text-md-left">
                            <a className="btn btn-danger"
                               onClick={this.onSubmitForm}>Envoyer</a>
                        </div>}
                        {this.state.status !== '' ? <div className={"alert alert-info mt-2 ml-3"}>
                            {this.state.status} 
                        </div>:null}
                    </div>
                    <LoadComponent loading={!loadingData} error={error} component={"contact"}>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x">

                            </i>
                                <p>{address}</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x">

                            </i>
                                <p>{phone}</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x">

                            </i>
                                <p>{email}</p>
                            </li>
                        </ul>
                        </div>
                    </LoadComponent>

                </div>

            </section>
        );
    }


}


export default Contact;