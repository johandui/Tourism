import React from 'react';
import Tour from '../components/Tour';
import TourStore from "../stores/TourPlanStore";
import * as TourActions from "../actions/TourActions";
import L from 'leaflet'
import "leaflet-routing-machine";

export class Mainpage extends React.Component {
    constructor (props) {
        super(props);
        this.getTours = this.getTours.bind(this);
        this.state = {
            is_attr_delete_button_clicked: false,
            position: [47.918895, 106.917593],
            zoom: 13,
            tour: TourStore.getAll(),
            tempTour: [],
            loading: false,
            routeWayPoints: []
        }
    }

    getTours(){
        this.setState({
            tour: TourStore.getAll(),
            tempTour: TourStore.getTour()
            });
    }

    getTourAtts(e) {
        this.state.tour.map((tour)=>{
             if(tour.name == e.currentTarget.dataset.id){
                if ((typeof tour.tour) !== 'undefined'){
                    this.setState({tempTour: tour.tour});
                }
                else {
                    TourActions.reloadCurrentTour(e.currentTarget.dataset.id);
                }
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
       // setTimeout(() => this.setState({ loading: true }), 1000);
    }

    componentWillUnMount(){
        TourStore.removeListener("change", this.getTours);
    }

    componentDidMount() {
        var map = L.map('mapid').setView(this.state.position, 13);
        L.tileLayer('https://api.minu.mn/tiles/{z}/{x}/{y}?token=daseyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwi', {
            maxZoom: 18,
        }).addTo(map);

        var routeControl  = L.Routing.control({
            position: 'topleft',
            waypoints: [
                L.latLng(47.920762, 106.917276),
                L.latLng(47.91563, 106.98049),
                L.latLng(47.91863, 106.98549)
            ],
        }).on('routesfound', function(e) {
            var routes = e.routes;
            alert('Found ' + routes.length + ' route(s).');
            alert("first route distance: " + e.routes[0].summary.totalDistance);
        }).addTo(map);

        this.state.tempTour.map((currentTourPlan, count) => {
            this.setState({
                routeWayPoints: this.state.routeWayPoints.concat(currentTourPlan)
            });
            console.log("a");
        });
        console.log(this.state.tempTour);
    }

    render() {
        var tour_plans = this.state.tour.map((tour, count) => {
            return <Tour onClick={this.getTourAtts.bind(this)} tour={tour} count={count}/>
        });



        return (
            <div className="Mainpage">
                <div class="row main-row">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 tour-column">
                        <div class="answer_section">

                        </div>
                        {tour_plans}
                    </div>
                    <div id="mapid" class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 map-column"/>
                </div>
                <div class="row main-footer">
                    <span class="copyright-text">© 2017</span>
                    <span class="developed-text">Developed by Orgil SEO</span>
                </div>
            </div>
        );
    }
}

