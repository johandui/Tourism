import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

export class Mainpage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            attractions: [],
            is_attr_delete_button_clicked: false
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
                attractions: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleCheck(e) {
        var pos = e.currentTarget.dataset.id-1;
        var arr = this.state.attractions;
        arr.splice(pos, 1);
        this.setState({
            attractions: arr
        });
    }

    deleteButtonChecker(e) {
        if(!this.state.is_attr_delete_button_clicked) {
            e.currentTarget.classList.add("show_atts_remove_button");
            this.setState({
                is_attr_delete_button_clicked: true
            });
        }
        else {
            e.currentTarget.classList.remove("show_atts_remove_button");
            this.setState({
                is_attr_delete_button_clicked: false
            });
        }
    }
    static defaultProps = {
        center: {lat: 47.8864, lng: 106.9057},
        zoom: 15
    };

    render() {
        var count = 0;
        var arr = this.state.attractions.map((att) => {
            count++;
            if(count==1 || count== this.state.attractions.length) {
                return  <li class="atts_li" onClick={this.deleteButtonChecker.bind(this)}>
                            <span class="atts_number unique_number">{count} </span>{att}
                            <span class="atts_remove" onClick={this.handleCheck.bind(this)} data-id={count}>  x</span>
                        </li>
            }
            else {
                return  <li class="atts_li" onClick={this.deleteButtonChecker.bind(this)}>
                            <span class="atts_number">{count} </span>{att}
                            <span class="atts_remove" onClick={this.handleCheck.bind(this)} data-id={count}>  x</span>
                        </li>
            }
        })
        return (
            <div className="row Mainpage">
                    <div class="col-4 atts_div">
                        <ul class="atts_ul">
                            {arr}
                        </ul>
                    </div>
                    <div class="col-8 map-column">
                        <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        </GoogleMapReact>
                    </div>
            </div>
        );
    }
}

