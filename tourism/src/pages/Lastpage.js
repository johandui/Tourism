import React from 'react';

export class Lastpage extends React.Component{
    render() {
        return(
            <div className="Lastpage">
                <div class="container">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-8 map-wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15134.016654543831!2d106.92402010055793!3d47.89107614156682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fb3ba226fc5b98b!2sOrgil+SEO!5e0!3m2!1sen!2sus!4v1508505458544"
                                    ></iframe>
                        </div>
                    </div>
                </div>
                <div class="container-fluid footer-img">
                    <div class="row">
                        <div class="col-12">
                            <img src="assets/Asset 7.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}