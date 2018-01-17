import React from 'react';

export class Secondpage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            day: '1',
        };
    }
    render() {
        return (
            <div className="Secondpage">
                <div class="container">
                    <div class="row header-wrapper">
                        <div class="col cloud-wrapper-1">
                            <img src="assets/Asset 2.svg"/>
                        </div>
                        <div class="col-7">
                            <span class="header-txt">TOURISM</span><br/><br/>
                            <span class="steps">Step 1</span>
                            <br/>
                            <span class="days">How many days do you need to travel in Ulaanbaatar ?</span>
                            <br/><br/><br/>
                            <div class="day-wrapper">
                                <div class="day-selector">
                                    <input type="radio" id="1day" name="day" class="day" checked/>
                                    <label for="1day">1</label>
                                    <input type="radio" id="2day" name="day" class="day" />
                                    <label for="2day">2</label>
                                    <input type="radio" id="3day" name="day" class="day" />
                                    <label for="3day">3</label>
                                    <input type="radio" id="4day" name="day" class="day" />
                                    <label for="4day">4</label>
                                    <input type="radio" id="5day" name="day" class="day" />
                                    <label for="5day">5</label>
                                </div>
                            </div>
                            <br/><br/><br/>
                            <span class="steps">Step 2</span><br/>
                            <span class="money">How much money will you spend to this trip ?</span><br/><br/>
                            <div class="money-wrapper">
                                <div class="money-selector">
                                    <input type="radio" id="1dollar" name="money" class="money" checked/>
                                    <label for="1dollar">
                                        <div class="money-inner">$</div>
                                    </label>
                                    <input type="radio" id="2dollar" name="money" class="money" />
                                    <label for="2dollar">
                                        <div class="money-inner">$$</div>
                                    </label>
                                    <input type="radio" id="3dollar" name="money" class="money" />
                                    <label for="3dollar">
                                        <div class="money-inner">$$$</div>
                                    </label>
                                    <input type="radio" id="4dollar" name="money" class="money" />
                                    <label for="4dollar">
                                        <div class="money-inner">$$$$</div>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <a class="btn btn-primaty go-button" href="/thirdpage" role="button">{this.props.testProp}Next</a>
                            </div>
                        </div>
                        <div class="col">
                            <img class="cloud-2" src="assets/Asset 2.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
