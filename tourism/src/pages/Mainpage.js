import React from 'react';
import axios from 'axios';

export class Mainpage extends React.Component {
    componentDidMount() {
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
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="Mainpage">
                <div class="container">
                    <div class="row header-wrapper">
                        <div class="col">
                        </div>
                        <div class="col-7">
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

