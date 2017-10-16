import React from 'react';

export class Secondpage extends React.Component {
    render() {
        return (
            <div className="Secondpage">
                <div class="container">
                    <div class="row wrapper">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cloud_wrapper">
                            <img class="cloud" src="assets/Asset 2.svg"/>
                        </div>
                        <div class="col-lg-6 col-md-3 col-sm-3 col-xs-3">
                            <span class="text">TOURISM</span>
                        </div>
                    </div>
                    <div class="row centered">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8 d">
                            <span class="step1">Step 1</span><br/>
                            <span class="days">How many days do you need to travel in Ulaanbaatar ?</span>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}
