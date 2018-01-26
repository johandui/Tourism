import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

export class Mainpage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tour_plans: [],
            is_attr_delete_button_clicked: false,
            map_center: {lat: 47.9188, lng: 106.9176},
            map_zoom: 15
        };
    }

    componentDidMount() {
        var global_this = this;
        var result = -1;
        var answers = this.props.history.location.state.split("/");
        var startDate = new Date(0);
        startDate.setMilliseconds(answers[1]);

        var day = parseInt (answers[0]/100);
        var money = parseInt((answers[0]%100)/10);
        var visited = parseInt(answers[0]%10);

        axios.get('http://acc07.server.ehlel.com/test.php', {
            params: {
                day: day,
                money: money,
                visited: visited,
                date: startDate
            }
        })
        .then(function (response) {
            global_this.setState({
                tour_plans: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getTourAtts(e) {
        alert("working")
    }

    render() {
        var count = 0;
        var tour_plans = this.state.tour_plans.map((tour) => {
            count++;
            return <div class="single-tour-plan" onClick={this.getTourAtts.bind(this)}
                        data-id={count} data-odd-checker={count%2}>
                <div class="price_wrapper">
                    <span class="tour-plan-price">100$</span>
                </div>
                <div class="name_wrapper">
                    <span class="tour-plan-name">{tour}</span>
                </div>
                <div class="img_wrapper">
                    <img class="tour-plan-img" src="https://www.pandotrip.com/wp-content/uploads/2017/02/The-worlds-largest-statue-of-Genghis-Khan-Mongolia-%C2%A9-Mark-Agnor-Shutterstock-Inc.-740x494.jpg"/>
                </div>
            </div>
        })
        return (
            <div className="Mainpage">
                <div class="row main-row">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 tour-column">
                        {tour_plans}
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 map-column">
                        <GoogleMapReact
                            defaultCenter={this.state.map_center}
                            defaultZoom={this.state.map_zoom}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
                <div class="row main-footer">
                    <span class="copyright-text">© 2017</span>
                    <span class="developed-text">Developed by Orgil SEO</span>
                </div>
            </div>

        );
    }
}

