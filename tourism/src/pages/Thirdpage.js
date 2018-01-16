import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
export class Thirdpage extends React.Component {
     constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
    render() {
        return (
            <div className="Secondpage">
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
                                        onChange={this.handleChange}
                                    />
                                 </div>
                            </div>
                            <br/><br/><br/>
                            <span className="steps">Step 4</span><br/>
                            <span className="money">Have you ever visited to the Mongolia before?</span><br/><br/>
                            <div className="money-wrapper">
                                <div className="money-selector">
                                    <input type="radio" id="1dollar" name="money" className="money" checked/>
                                    <label for="1dollar">
                                        <div className="money-inner">YES</div>
                                    </label>
                                    <input type="radio" id="2dollar" name="money" className="money" />
                                    <label for="2dollar">
                                        <div className="money-inner">NO</div>
                                    </label>
                                   
                                </div>
                            </div>
                            
                            <br/>
                            <div>
                                <a className="btn btn-primaty go-button" href="/last" role="button">Let's Go</a>
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
