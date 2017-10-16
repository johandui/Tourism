import React from 'react';

export class Secondpage extends React.Component {
    render() {
        return (
            <div className="Secondpage">
                <div class="container">
                    <div class="row header-wrapper">
                        <div class="col cloud_wrapper">
                            <img class="cloud" src="assets/Asset 2.svg"/>
                        </div>
                        <div class="col-7">
                            <span class="header-txt">TOURISM</span><br/><br/>
                            <span class="steps">Step 1</span><br/>
                            <span class="days">How many days do you need to travel in Ulaanbaatar ?</span><br/><br/>
                            <img  src="assets/Asset 1.svg"/><br/><br/>
                            <span class="steps">Step 2</span><br/>
                            <span class="money">How much money will you spend to this trip ?</span><br/><br/>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
                <div class="container-fluid footer-img">
                    <div class="row">
                        <div class="col-12">
                            <img src="assets/Asset 8.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
