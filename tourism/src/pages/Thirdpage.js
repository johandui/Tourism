import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export class Thirdpage extends React.Component {
    constructor (props) {
    super(props)
        this.state = {
            startDate: moment(),
            visited: 'Yes',
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

    DoSubmit() {
        var visited = this.state.visited;
        var date = this.state.startDate;
        document.getElementsByName("req_visited")[0].value = visited;
        document.getElementsByName("req_date")[0].value = date;
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
                                    <input type="radio" id="yes" value="Yes" name="visited"
                                           checked={this.state.visited === 'Yes'}  onChange={this.visitedStateChanger.bind(this)}/>
                                    <label for="yes">
                                        <div className="money-inner">YES</div>
                                    </label>
                                    <input type="radio" id="no" value="No" name="visited"
                                            checked={this.state.visited === 'No'} onChange={this.visitedStateChanger.bind(this)}/>
                                    <label for="no">
                                        <div className="money-inner">NO</div>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <form action="http://acc07.server.ehlel.com/test.php" method="get">
                                    <input type="hidden" name="req_day"/>
                                    <input type="hidden" name="req_money"/>
                                    <input type="hidden" name="req_date"/>
                                    <input type="hidden" name="req_visited"/>
                                    <button className="btn btn-primary go-button" type="submit"
                                            onClick={this.DoSubmit.bind(this)}>Let's Go</button>
                                </form>
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
