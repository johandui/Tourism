import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import Tour from '../components/Tour';
import TourStore from "../stores/TourPlanStore";
import * as TourActions from "../actions/TourActions";
export class Mainpage extends React.Component {
    constructor (props) {
        super(props);
        this.getTours = this.getTours.bind(this);
        this.state = {
            is_attr_delete_button_clicked: false,
            map_center: {lat: 47.9188, lng: 106.9176},
            map_zoom: 15,
            tour: TourStore.getAll()
        }
    
    }
    getTours(){
        this.setState({
            tour: TourStore.getAll()}
         );
    }


        componentWillMount(){
        TourStore.on("change", this.getTours);
          var global_this = this;
        var result = -1;
        var answers = this.props.history.location.state.split("/");
        var startDate = new Date(0);
        startDate.setMilliseconds(answers[1]);

        var day = parseInt (answers[0]/100);
        var money = parseInt((answers[0]%100)/10);
        var visited = parseInt(answers[0]%10);
        TourActions.reloadTour(day, money, visited, startDate);
        this.getTours();
    }
    componentWillUnMount(){
        TourStore.removeListener("change", this.getTours); }


    getTourAtts(e) {
        this.state.tour.map((tour)=>{
            if(tour.name == e.currentTarget.dataset.id)
              (typeof tour.tour) === 'undefined' ? 
                TourActions.reloadCurrentTour(e.currentTarget.dataset.id) : ""
        })
    }

    render() {
        var tour_plans = this.state.tour.map((tour, count) => {
            return <Tour onClick={this.getTourAtts.bind(this)} tour={tour} count={count}/>
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

