import React from 'react';
import { Link } from 'react-router-dom'
export class Secondpage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            day: '1',
            money: '1',
            loading: true
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 5000);
    }
  
    dayStateChanger(event) {
        this.setState({
            day: event.target.value
        });
    }

    moneyStateChanger(event) {
        this.setState({
            money: event.target.value
        });
    }

    render() {
        const { loading } = this.state;
        if(loading) { 
          return (
        <div className="Secondpage">
            
        <svg className="svg2" viewBox="0 0 747.7 510" preserveAspectRatio="xMinYMin slice">
   <g id="Layer_1_1_">
    <title>Asset 11</title>
    <g id="Layer_2_1_">
        <g id="Layer_2-2">
            <rect y="197.4" className="sts0" width="747.7" height="3"/>
        </g>
        <g id="Layer_7">
            <path className="sts1" d="M0,136c0,0,275.1,7.1,358.1,31.6l0,0L516.6,196L0,198.1V136z"/>
            <path className="sts1" d="M747.7,200.4V154c0,0-327.2,18.5-371.1,5.3l0,0v35.4L747.7,200.4"/>
        </g>
        <g id="Layer_6">
            <path className="sts2" d="M744.6,166.7c0,0-150.1,2.6-188,9c0,0-129.4-23.9-144.7-11.5c0,0-165.3-32.5-236.3-3.7L0,156.7V198
                l747.7,2.3v-33.7"/>
        </g>
        <g id="Layer_4">
            <path className="sts3" d="M0,149.7c0,0,103.6-10.1,175.6,10.9c0,0,125.5-5.8,182.5,8.5l0,0c0,0,115.6,2.6,122.5,13l0,0
                c0,0,63,2.2,83,0.9c0,0,135.1-16.3,184,0.1v17.5L0,198.1V149.7z"/>
        </g>
        <g id="Layer_5">
            <path className="sts3" d="M670.1,157.8c0,0-4,0-1.8,11c0,0-3.5,1.8-4-5.5c0,0-2.2-2.6-3,0.1c0,0,2.5,8.4,4.4,8.7
                c0.7,0.1,1.4,0.1,2.1,0l0.2,3.7h3.5V174c0.8,0,1.6-0.3,2.2-0.7c0.2-0.2,0.3-0.4,0.4-0.6c0.5-1.8,2.2-8.3,1.4-10
                c-0.4-0.6-1.3-0.7-1.8-0.3c-0.1,0.1-0.2,0.1-0.2,0.2c-0.2,0.4-0.2,0.9-0.1,1.3c0,0,0.8,7.4-0.3,7.7c0,0-0.9,0.5-0.9,0.2
                C672.2,171.6,673.5,157.7,670.1,157.8z"/>
            <path className="sts4" d="M597.1,165.2c0,0-1.5,0-0.7,4.3c0,0-1.3,0.7-1.5-2.1c0,0-0.9-1-1.2,0c0,0,1,3.2,1.7,3.4
                c0.3,0.1,0.5,0.1,0.8,0l0.1,1.4h1.4v-0.7c0.3,0,0.6-0.1,0.9-0.3c0.1-0.1,0.1-0.2,0.2-0.2c0.2-0.7,0.8-3.2,0.5-3.9
                c-0.2-0.2-0.5-0.3-0.7-0.1l-0.1,0.1c-0.1,0.2-0.1,0.4,0,0.5c0,0,0.3,2.9-0.1,3c0,0-0.3,0.2-0.3,0.1S598.4,165.2,597.1,165.2z"/>
        </g>
    </g>
</g>
<g id="Layer_4_1_">
    <g id="Layer_3">
        <path className="sts0" d="M0,197.4"/>
        <circle className="sts5" cx="78.6" cy="27" r="27"/>
    </g>
</g>
<g id="Layer_3_1_">
    <g id="Layer_2">
        <g id="Layer_1-2">
            <g id="Layer_2-3">
                <g id="Layer_2-2-2">
                    <circle className="sts0" cx="18" cy="191.7" r="5.7"/>
                    <circle className="sts0" cx="-6.2" cy="191.7" r="5.7"/>
                    <circle className="sts0" cx="5.9" cy="191.7" r="5.7"/>
                    <circle className="sts0" cx="-18.3" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-25.2" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-32.1" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-62.3" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-69.2" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-76" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-138" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-151.5" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-176.1" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-182.9" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-189.8" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-251.7" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-258.5" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-265.4" cy="194.2" r="3.2"/>
                    <circle className="sts0" cx="-144.7" cy="194.2" r="3.2"/>
                    <path className="sts0" d="M27,179.3v-13.6h-1.9v-1.9H27v-2.4h-5.8v2.4h1.5v2h-5.8V164h2.7v-4.7H9.7v4.6h2.1v1.7H7.4v-3.9l-1.1-1.1H4
                        l-1.2,1.2v3.8h-4.4v-3.7l-1.1-1.1h-2.6l-1.1,1.1v3.6H-11v-8.7h1.9V154h-31.1v2.6h2V180h-2.6v12.6l-0.8,0.8h-10.3l-0.9-0.9
                        v-14.3h-4v-17.3h-5.4l-1.8-1.7h-20.7l-1.8,1.8h-17.1v-1.2h-6.5v1.3h-16.5l-2-2h-19.8l-1.9,1.9h-6.2v32.2h-3.1v-0.5h-3v0.6h-4.5
                        v-15.2h-3.9v-17.2h-6.2l-1.8-1.8h-19.4l-1.9,1.9h-16.9v-1.2h-7.1v1.3h-16.3l-2-2h-19.7l-1.7,1.7h-6.7V194h-3v-1.3h-1.3v3.2h1.8
                        v-0.5h4.5v-4.6h20.5v3.8h54.9v-3.8h20.8v4h4.5v1h13v-4.7h20.5v3.6h54.9V191h20.9v3.7h4.9v1h13.4v-1.5h5.1V191h20.2v3.8h12.5
                        l2.1-4.1l2.2,4h7.9l2.6-4l9.5,0.7l9.4,5.6h2.8v-7.7h2v-10.2L27,179.3z M-255.9,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8
                        c-0.6,0-1.1-0.5-1.1-1.1l0,0v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-244.3,176.6
                        c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1l0,0v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8c0.6,0,1.1,0.5,1.1,1.1V176.6z
                         M-232.9,176.6c0,0.6-0.5,1.1-1.1,1.1h-3.4c-0.6,0-1.1-0.5-1.1-1.1l0,0v-8.1c0-0.6,0.5-1.1,1.1-1.1h3.4c0.6,0,1.1,0.5,1.1,1.1
                        V176.6z M-224.3,176.6c0,0.6-0.5,1.1-1.1,1.1h-3.4c-0.6,0-1.1-0.5-1.1-1.1l0,0v-8.1c0-0.6,0.5-1.1,1.1-1.1h3.4l0,0
                        c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-212.2,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1
                        c0-0.6,0.5-1.1,1.1-1.1h4.8l0,0c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-200.8,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8
                        c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8c0.6,0,1.1,0.5,1.1,1.1V176.6z M-189.6,176.6c0,0.6-0.5,1.1-1.1,1.1
                        h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8l0,0c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-175.1,176.6
                        c0,0.6-0.5,1.1-1.1,1.1h-5.5c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h5.6c0.6,0,1.1,0.5,1.1,1.1l0,0L-175.1,176.6z
                         M-141.9,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8c0.6,0,1.1,0.5,1.1,1.1
                        V176.6z M-130.3,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.7
                        c0.6,0,1.1,0.5,1.1,1.1L-130.3,176.6z M-119.2,176.6c0,0.6-0.5,1.1-1.1,1.1h-3.4c-0.6,0-1.1-0.5-1.1-1.1v-8.1
                        c0-0.6,0.5-1.1,1.1-1.1h3.4l0,0c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-110.5,176.6c0,0.6-0.5,1.1-1.1,1.1h-3.4
                        c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h3.4l0,0c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-98.3,176.6
                        c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8c0.6,0,1.1,0.5,1.1,1.1V176.6z
                         M-86.8,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8l0,0c-0.6,0-1.1-0.5-1.1-1.1l0,0v-8.1c0-0.6,0.5-1.1,1.1-1.1h4.8
                        c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-75.3,176.6c0,0.6-0.5,1.1-1.1,1.1h-4.8c-0.6,0-1.1-0.5-1.1-1.1v-8.1
                        c0-0.6,0.5-1.1,1.1-1.1h4.8l0,0c0.6,0,1.1,0.5,1.1,1.1l0,0V176.6z M-61.3,176.6c0,0.6-0.5,1.1-1.1,1.1h-5.5
                        c-0.6,0-1.1-0.5-1.1-1.1v-8.1c0-0.6,0.5-1.1,1.1-1.1h5.6c0.6,0,1.1,0.5,1.1,1.1l0,0L-61.3,176.6z M-28.6,169.4h-7.7v-10.3h7.7
                        V169.4z M-13.5,164.2h-13.8v-5.1h13.8V164.2z"/>
                    <g id="Layer_3-2">
                        <line className="sts6" x1="26.6" y1="171.2" x2="-13.5" y2="171.2"/>
                        <polyline className="sts6" points="26.6,177.7 13.4,177.7 10.5,181.5 -31.1,181.5 -34.6,177.9 -38.4,177.9                      "/>
                        <line className="sts6" x1="-13.5" y1="164.2" x2="-13.5" y2="181.5"/>
                    </g>
                    <line className="sts6" x1="-11.2" y1="166.2" x2="26.6" y2="166.2"/>
                    <rect x="-71" y="165.7" className="sts7" width="11.7" height="24.1"/>
                    <rect x="-184.8" y="165.8" className="sts7" width="11.7" height="24.1"/>
                    <line className="sts7" x1="-57.7" y1="163.5" x2="-156.7" y2="163.5"/>
                    <line className="sts7" x1="-171.6" y1="163.5" x2="-271" y2="163.5"/>
                    <polyline className="sts7" points="-167.2,178.3 -171.6,181.9 -189.8,181.9 -193.1,183.7 -247.6,183.7 -251.7,182.1 -271,182.1 
                                            "/>
                    <line className="sts6" x1="-11.2" y1="156.7" x2="-38.4" y2="156.7"/>
                    <path className="sts6" d="M-11.2,165.4"/>
                    <polyline className="sts7" points="-53.1,178.4 -57.7,181.2 -76,181.2 -78.7,183.9 -133.2,183.9 -136,181.2 -156.8,181.2                    "/>
                    <rect x="-126.1" y="165.8" className="sts7" width="16.8" height="24.1"/>
                    <line className="sts7" x1="-117.7" y1="165.8" x2="-117.7" y2="189.9"/>
                    <rect x="-239.8" y="165.8" className="sts7" width="16.8" height="24.1"/>
                    <line className="sts7" x1="-231.4" y1="165.8" x2="-231.4" y2="189.9"/>
                </g>
            </g>
        </g>
    </g>
    
        <animateTransform  accumulate="none" additive="replace" attributeName="transform" attributeType="HML" begin="0" calcMode="linear" dur="10" fill="remove" repeatCount="1" restart="always" type="translate" values="0,0; 1000,0;0,0">
        </animateTransform> 
</g>
<text x="8%" className="sts8" transform="matrix(1 0 0 1 240.3 262.2003)" >Are you ready ?</text>

            </svg>

      </div>
            );
         }
        return (
            <div className="Secondpage">
                <div className="container">
                    <div className="row header-wrapper">
                        <div className="col cloud-wrapper-1">
                            <img src="assets/Asset 2.svg"/>
                        </div>
                        <div className="col-7">
                            <span className="header-txt">Mongolian tour planner</span><br/><br/>
                            <span className="steps">Step 1</span>
                            <br/>
                            <span className="days">How many days do you need to travel in Ulaanbaatar ?</span>
                            <br/><br/><br/>
                            <div className="day-wrapper">
                                <div className="day-selector">
                                    <input type="radio" id="1day" name="day" className="day" value="1"
                                           checked={this.state.day === '1'}  onChange={this.dayStateChanger.bind(this)}/>
                                    <label for="1day">1</label>
                                    <input type="radio" id="2day" name="day" className="day" value="2"
                                           checked={this.state.day === '2'}  onChange={this.dayStateChanger.bind(this)}/>
                                    <label for="2day">2</label>
                                    <input type="radio" id="3day" name="day" className="day" value="3"
                                           checked={this.state.day === '3'}  onChange={this.dayStateChanger.bind(this)}/>
                                    <label for="3day">3</label>
                                    <input type="radio" id="4day" name="day" className="day" value="4"
                                           checked={this.state.day === '4'}  onChange={this.dayStateChanger.bind(this)}/>
                                    <label for="4day">4</label>
                                    <input type="radio" id="5day" name="day" className="day" value="5"
                                           checked={this.state.day === '5'}  onChange={this.dayStateChanger.bind(this)}/>
                                    <label for="5day">5</label>
                                </div>
                            </div>
                            <br/><br/><br/>
                            <span className="steps">Step 2</span><br/>
                            <span className="money">How much money will you spend to this trip ?</span><br/><br/>
                            <div className="money-wrapper">
                                <div className="money-selector">
                                    <input type="radio" id="1dollar" name="money" className="money" value="1"
                                           checked={this.state.money === '1'}  onChange={this.moneyStateChanger.bind(this)}/>
                                    <label for="1dollar">
                                        <div className="money-inner">$</div>
                                    </label>
                                    <input type="radio" id="2dollar" name="money" className="money" value="2"
                                           checked={this.state.money === '2'}  onChange={this.moneyStateChanger.bind(this)}/>
                                    <label for="2dollar">
                                        <div className="money-inner">$$</div>
                                    </label>
                                    <input type="radio" id="3dollar" name="money" className="money" value="3"
                                           checked={this.state.money === '3'}  onChange={this.moneyStateChanger.bind(this)}/>
                                    <label for="3dollar">
                                        <div className="money-inner">$$$</div>
                                    </label>
                                    <input type="radio" id="4dollar" name="money" className="money" value="4"
                                           checked={this.state.money === '4'}  onChange={this.moneyStateChanger.bind(this)}/>
                                    <label for="4dollar">
                                        <div className="money-inner">$$$$</div>
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <Link className="btn btn-primaty go-button"
                                    to={{
                                        pathname: '/thirdpage',
                                        state: { day: this.state.day, money: this.state.money }
                                    }}>Next</Link>
                            </div>
                        </div>
                        <div className="col">
                            <img className="cloud-2" src="assets/Asset 2.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

