import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


export class Thirdpage extends React.Component {
    constructor (props) {
    super(props)
        this.state = {
            startDate: moment(),
            visited: '1',
        };
      }

    dateStateChanger(date) {
        this.setState({
          startDate: date
        });
      }

    visitedStateChanger(event) {
        this.setState({
            visited: event.target.value
        });
    }

    passData() {
        var visited = this.state.visited;
        var date = this.state.startDate;
        var day_money = this.props.history.location.state;
        var day = parseInt(day_money/10);
        var money = day_money%10;
        var answers = day + "" + money + "" + this.state.visited + "/" + this.state.startDate;
        this.props.history.push("/mainpage", answers);
    }

    render() {
        return (
            <div className="Thirdpage">
                <div className="container">
                    <div className="row header-wrapper">
                        <div className="col cloud-wrapper-1">
                        </div>
                        <div className="col-7">
                            <span className="header-txt">TOURISM</span><br/><br/>
                            <span className="steps">Step 3</span>
                            <br/>
                            <span className="days">When do you plan to arrive in Mongolia?</span>

                            <br/><br/><br/>
                            <div className="date-wrapper">
                                <div className="date-selector">
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.dateStateChanger.bind(this)}
                                    />
                                 </div>
                            </div>
                            <br/><br/><br/>
                            <span className="steps">Step 4</span><br/>
                            <span className="money">Have you ever visited to the Mongolia before?</span><br/><br/>
                            <div className="money-wrapper">
                                <div className="money-selector">
                                    <input type="radio" id="yes" value="1" name="visited"
                                           checked={this.state.visited === '1'}  onChange={this.visitedStateChanger.bind(this)}/>
                                    <label for="yes">
                                        <div className="money-inner">YES</div>
                                    </label>
                                    <input type="radio" id="no" value="0" name="visited"
                                            checked={this.state.visited === '0'} onChange={this.visitedStateChanger.bind(this)}/>
                                    <label for="no">
                                        <div className="money-inner">NO</div>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <a class="btn btn-primaty go-button" href="/mainpage" role="button"
                                   onClick={this.passData.bind(this)}>Let's Go</a>
                            </div>
                        </div>
                        <div className="col">
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
