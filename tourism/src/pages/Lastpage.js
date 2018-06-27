import React from 'react';

export class Lastpage extends React.Component{
    render() {
        return(
            <div className="Lastpage">
                <div className="container">
                    <div className="row map-row">
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <form className="contact-form">
                                <label for="id_name">Name: *</label>
                                <input type="text" name="name" id="id_name"/><br/>
                                <label for="id_email">Email: *</label>
                                <input type="text" name="email" id="id_email"/><br/>
                                <label for="id_message">Message: *</label>
                                <textarea cols="40" rows="5" name="message" id="id_message"></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="map-wrapper">
                                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15134.016654543831!2d106.92402010055793!3d47.89107614156682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fb3ba226fc5b98b!2sOrgil+SEO!5e0!3m2!1sen!2sus!4v1508505458544"
                                        allowFullScreen></iframe>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-img">
                    <div className="row">
                        <div className="col-12">
                            <img src="assets/Asset 7.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}