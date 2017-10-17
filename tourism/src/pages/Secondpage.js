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
                            <div class="day-wrapper">
                                <div class="day-selector">
                                    <input type="checkbox" id="1day" class="day" checked/>
                                    <label for="1day">1</label>
                                    <input type="checkbox" id="2day" class="day" />
                                    <label for="2day">2</label>
                                    <input type="checkbox" id="3day" class="day" />
                                    <label for="3day">3</label>
                                    <input type="checkbox" id="4day" class="day" />
                                    <label for="4day">4</label>
                                    <input type="checkbox" id="5day" class="day" />
                                    <label for="5day">5</label>
                                </div>
                            </div>
                            <br/><br/>
                            <span class="steps">Step 2</span><br/>
                            <span class="money">How much money will you spend to this trip ?</span><br/><br/>
                            <div class="money-wrapper">
                                <div class="money-selector">
                                    <input type="checkbox" id="1dollar" class="money" checked/>
                                    <label for="1dollar">$</label>
                                    <input type="checkbox" id="2dollar" class="money" />
                                    <label for="2dollar">$$</label>
                                    <input type="checkbox" id="3dollar" class="money" />
                                    <label for="3dollar">$$$</label>
                                    <input type="checkbox" id="4dollar" class="money" />
                                    <label for="4dollar">$$$$</label>
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>
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
