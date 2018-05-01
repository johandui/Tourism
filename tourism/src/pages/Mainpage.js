import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Tour from '../components/Tour';
import TourStore from "../stores/TourPlanStore";
import * as TourActions from "../actions/TourActions";

export class Mainpage extends React.Component {
    constructor (props) {
        super(props);
        this.getTours = this.getTours.bind(this);
        this.state = {
            is_attr_delete_button_clicked: false,
            position: [47.918894, 106.917593],
            zoom: 15,
            tour: TourStore.getAll(),
            tempTour: [],
            loading: false
        }
    }

    getTours(){
        this.setState({
            tour: TourStore.getAll()}
         );
    }

    getTourAtts(e) {
        this.state.tour.map((tour)=>{
             if(tour.name == e.currentTarget.dataset.id){
                (typeof tour.tour) === 'undefined' ?
                    TourActions.reloadCurrentTour(e.currentTarget.dataset.id) : ""
                if ((typeof tour.tour) !== 'undefined'){
                    this.setState({tempTour: tour.tour});
                    console.log(this.state);}
            }
        })
    }

    componentWillMount(){
        TourStore.on("change", this.getTours);
        var day = this.props.location.state.day;
        var money = this.props.location.state.money;
        var visited = this.props.location.state.visited;
        var date = this.props.location.state.startDate;
        TourActions.reloadTour(day, money, visited, date);
        setTimeout(() => this.setState({ loading: true }), 1000);
        this.getTours();
    }

    componentWillUnMount(){
        TourStore.removeListener("change", this.getTours);
    }

    render() {
        var tour_plans = this.state.tour.map((tour, count) => {
            return <Tour onClick={this.getTourAtts.bind(this)} tour={tour} count={count}/>
        });
<<<<<<< HEAD


=======
        var markers = this.state.tempTour.map((tour, count) => {
            var s = [];
            s.push(tour.lat);
            s.push(tour.lng);
            return (<Marker position={s}  count={count}>
                <Popup>
                    <span>{tour.att_name}</span>
                </Popup>
            </Marker>);
        });

        const position = [47.9210, 106.9204];
>>>>>>> master
        const test_position = [47.920493, 106.917302];
        return (
            <div className="Mainpage">
                <div class="row main-row">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 tour-column">
                        <div class="answer_section">

                        </div>
                        {tour_plans}
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 map-column">
                        <Map style={{height: "100vh"}} center={this.state.position} zoom={this.state.zoom}>
                            <TileLayer
                                url="https://api.minu.mn/tiles/{z}/{x}/{y}?token=daseyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwi"
                            />
                            <Marker position={test_position}>
                                <Popup>
                                    <span>Parliament building</span>
                                </Popup>
                            </Marker>
                            <div>{ markers}</div>
                        </Map>
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

