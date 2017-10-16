import React from 'react';

export class Secondpage extends React.Component {
    render() {
        return (
            <div className="Secondpage">
                <div class="container">
                    <div class="row header-wrapper">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 cloud_wrapper">
                            <img class="cloud" src="assets/Asset 2.svg"/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <span class="header-txt">TOURISM</span>
                        </div>
                    </div>
                    <div class="row centered">
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <span class="step1">Step 1</span><br/>
                            <span class="days">How many days do you need to travel in Ulaanbaatar ?</span>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}
