import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { Link } from 'react-router-dom';

export class Thirdpage extends React.Component {
    constructor (props) {
    super(props)
        this.state = {
            startDate: moment(),
            visited: '1',
            loading: true
        };
      }

  componentDidMount(){
    setTimeout(()=> this.setState({loading: false}), 4000);
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

    render() {
        const { loading } = this.state;
        if(loading) { 
          return (
<div className="Homepage">
        <svg className="svg2" viewBox="0 0 747.7 510" preserveAspectRatio="xMinYMin slice">
        <g id="Layer_3_1_">
    <g id="Layer_1_1_">
        <title>gg</title>
        <g id="Layer_11">
            <rect y="211.9" class="stt0" width="840.7" height="39.7"/>
            <g id="Layer_13">
                <rect y="230.7" class="stt1" width="840.7" height="1"/>
            </g>
        </g>
        <g id="Layer_12">
            <path class="stt2" d="M33.6,119.4c3.2,0,3.2-5,0-5S30.3,119.4,33.6,119.4z"/>
            <path class="stt2" d="M112.9,80.5c3.2,0,3.2-5,0-5S109.7,80.5,112.9,80.5z"/>
            <path class="stt2" d="M89.8,74c3.2,0,3.2-5,0-5S86.6,74,89.8,74z"/>
            <path class="stt2" d="M47.1,72.3c3.2,0,3.2-5,0-5S43.9,72.3,47.1,72.3z"/>
            <path class="stt2" d="M115.8,112.8c3.2,0,3.2-5,0-5S112.5,112.8,115.8,112.8z"/>
            <path class="stt2" d="M159.5,76.9c3.2,0,3.2-5,0-5S156.3,76.9,159.5,76.9z"/>
            <path class="stt2" d="M280.8,61c3.2,0,3.2-5,0-5S277.6,61,280.8,61z"/>
            <path class="stt2" d="M230.3,125.9c3.2,0,3.2-5,0-5S227.1,125.9,230.3,125.9z"/>
            <path class="stt2" d="M353.6,104.3c3.2,0,3.2-5,0-5S350.4,104.3,353.6,104.3z"/>
            <path class="stt2" d="M249.5,69.8c3.2,0,3.2-5,0-5S246.3,69.8,249.5,69.8z"/>
            <path class="stt2" d="M195.9,128.3c3.2,0,3.2-5,0-5S192.7,128.3,195.9,128.3z"/>
            <path class="stt2" d="M286.4,109.1c3.2,0,3.2-5,0-5S283.2,109.1,286.4,109.1z"/>
            <path class="stt2" d="M318.4,141.1c3.2,0,3.2-5,0-5S315.2,141.1,318.4,141.1z"/>
            <path class="stt2" d="M364.1,163.5c3.2,0,3.2-5,0-5S360.8,163.5,364.1,163.5z"/>
            <path class="stt2" d="M119,161.1c3.2,0,3.2-5,0-5S115.8,161.1,119,161.1z"/>
            <path class="stt2" d="M12.5,157.1c3.2,0,3.2-5,0-5S9.3,157.1,12.5,157.1z"/>
            <path class="stt2" d="M8.5,97.1c3.2,0,3.2-5,0-5S5.3,97.1,8.5,97.1z"/>
            <path class="stt2" d="M4.5,24.2c3.2,0,3.2-5,0-5S1.3,24.2,4.5,24.2z"/>
            <path class="stt2" d="M45.4,5c3.2,0,3.2-5,0-5S42.1,5,45.4,5z"/>
            <path class="stt2" d="M94.2,22.6c3.2,0,3.2-5,0-5S91,22.6,94.2,22.6z"/>
            <path class="stt2" d="M207.1,22.6c3.2,0,3.2-5,0-5S203.9,22.6,207.1,22.6z"/>
            <path class="stt2" d="M276.8,16.2c3.2,0,3.2-5,0-5S273.5,16.2,276.8,16.2z"/>
            <path class="stt2" d="M338.4,22.6c3.2,0,3.2-5,0-5S335.2,22.6,338.4,22.6z"/>
            <path class="stt2" d="M387.3,51.4c3.2,0,3.2-5,0-5S384,51.4,387.3,51.4z"/>
        </g>
    </g>
</g>
<g id="Layer_1">
    <g id="Layer_3">
        <g id="Layer_2">
            <circle class="stt3" cx="117.2" cy="224" r="12.1"/>
            <circle class="stt3" cx="41.9" cy="224" r="12.1"/>
            <path class="stt2" d="M148.1,213.2v-13.1c0,0-0.6-6.3-5.1-7.8c-0.6-0.6-1.2-1.2-1.7-1.8l-5.9,1.5c0,0-7.5-12.3-7.7-13.6l6.6-0.2
                l-0.4-0.7l-0.7-1.1c0,0-2.9-5.4-7.3-5.1H22c0,0-5.4,0.5-6.5,4.8l-4.3,19.8V211c0.3,1,0.5,1.9,0.6,2.9h-1.7v4.3h2.2l1.6,4.3h15.6
                c0,0,1.4-8.2,3-8.3h17.1c0,0,2.7,0.3,4.8,7.9h50.7c0,0,1.6-7.8,4.3-8.9h16.5c0,0,2.5,8,4,8.5h8.5c0,0,5.5-2.7,6.5-3.3l4.8-0.1v-4
                L148.1,213.2z M124.3,191.4H110c-0.3-0.1-0.6-0.3-0.8-0.6v-10.6c0-0.4,0.1-0.8,0.4-1h13.6c0,0,2,0.3,4.5,8.6L124.3,191.4z"/>
            <g id="Layer_5">
                <line class="stt4" x1="141.4" y1="191.3" x2="133.4" y2="177.2"/>
            </g>
            <g id="Layer_8">
                <line class="stt5" x1="29.3" y1="176.4" x2="29.3" y2="221.2"/>
                <line class="stt5" x1="60.1" y1="176.4" x2="60.1" y2="221.2"/>
                <line class="stt5" x1="89.7" y1="176.4" x2="89.7" y2="221.2"/>
                <path class="stt5" d="M107.4,176.4v35.3l18.3,0.2c0,0,3.3,0.2,4.1,6.8h8.1v-14.1c-0.3-4.4-1.5-8.6-3.4-12.5l-7.3-14.2
                    c-0.7-0.8-1.7-1.3-2.8-1.5C124.4,176.4,107.4,176.4,107.4,176.4z"/>
                <line class="stt5" x1="107.4" y1="176.4" x2="15.5" y2="176.4"/>
            </g>
            <g id="Layer_6">
                <path class="stt3" d="M100.8,191.8h-5.2c-1.8,0-3.2-1.4-3.2-3.2v-6.3c0-1.8,1.4-3.2,3.2-3.2h5.2c1.8,0,3.2,1.4,3.2,3.2v6.3
                    C104,190.3,102.6,191.8,100.8,191.8C100.9,191.8,100.8,191.8,100.8,191.8z"/>
                <path class="stt3" d="M85,191.8H64.9c-1.8,0-3.2-1.4-3.2-3.2v-6.3c0-1.8,1.4-3.2,3.2-3.2H85c1.8,0,3.2,1.4,3.2,3.2v6.3
                    C88.2,190.4,86.8,191.8,85,191.8z"/>
                <path class="stt3" d="M55.4,191.8H35.2c-1.8,0-3.2-1.4-3.2-3.2v-6.3c0-1.8,1.4-3.2,3.2-3.2h20.1c1.8,0,3.2,1.4,3.2,3.2v6.3
                    C58.5,190.3,57.2,191.8,55.4,191.8L55.4,191.8z"/>
            </g>
            <g id="Layer_7">
                <path class="stt3" d="M25.7,179.2h-5.1c-1.9,0-2.3,1-2.3,1l-1.7,9.2c-0.4,1.9,1.7,2.4,1.7,2.4h7.4c0.9,0,1.7-0.8,1.7-1.7v-9.2
                    C27.4,180,26.6,179.2,25.7,179.2z"/>
            </g>
        </g>
    </g>
    
        <animateTransform  accumulate="none" additive="replace" attributeName="transform" attributeType="HML" begin="0" calcMode="linear" dur="10" fill="remove" repeatCount="1" restart="always" type="translate" values="0,0; 1000,0;0,0">
        </animateTransform>
</g>
<g id="Layer_2_2_">
    <g id="Layer_2_1_">
        <g id="Layer_15">
            <circle class="stt6" cx="62.1" cy="101.8" r="25.3"/>
            <path class="stt2" d="M55.3,108.5c-7.8-7.8-9.6-19.7-4.6-29.5c-12.4,6.4-17.3,21.7-10.9,34.1s21.7,17.3,34.1,10.9
                c2.3-1.2,4.4-2.7,6.3-4.6c1.8-1.9,3.4-4,4.6-6.3C75,118.2,63.1,116.3,55.3,108.5z"/>
        </g>
    </g>
</g>
<text x="8%"  class="stt2" transform="matrix(1 0 0 1 240.3 290.2003)" >Going to next page</text>

            </svg>
      </div>
            )}
        return (
            <div className="Thirdpage">
                <div className="container">
                    <div className="row header-wrapper">
                        <div className="col cloud-wrapper-1">
                        </div>
                        <div className="col-7">
                            <span className="header-txt">Welcome to Mongolia</span><br/><br/>
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
                                <Link class="btn btn-primaty go-button"
                                      to={{
                                          pathname: '/mainpage',
                                          state: {
                                              day: this.props.location.state.day,
                                              money: this.props.location.state.money,
                                              startDate: this.state.startDate.format(),
                                              visited: this.state.visited
                                          }
                                      }}>Let's go</Link>
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
moment.locale();
