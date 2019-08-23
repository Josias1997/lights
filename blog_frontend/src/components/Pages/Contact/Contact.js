import React from 'react';
import {connect} from 'react-redux';

const Contact = props => {
    return (
        <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Me contacter</h2>
            <p className="text-center w-responsive mx-auto mb-5">Avez vous des questions? N'hésitez pas à me contacter
                directement.</p>

            <div className="row">

                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" method="POST">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Nom</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Email</label>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Sujet</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea id="message" name="message" rows="2"
                                              className="form-control md-textarea">

                                    </textarea>
                                    <label htmlFor="message">Votre message</label>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left">
                        <a className="btn btn-primary"
                           onClick="document.getElementById('contact-form').submit();">Envoyer</a>
                    </div>
                    <div className="status">

                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x">

                        </i>
                            <p>Rabat, Bab El Had, Maroc</p>
                        </li>

                        <li><i className="fas fa-phone mt-4 fa-2x">

                        </i>
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li><i className="fas fa-envelope mt-4 fa-2x">

                        </i>
                            <p>johndoe@gmail.com</p>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.about.profile,
        error: state.about.error,
    }
};

export default connect(mapStateToProps)(Contact);