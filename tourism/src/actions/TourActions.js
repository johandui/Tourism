import dispatcher from "../dispatcher.js";
import axios from 'axios';
export function reloadTour(day, money, visited, date){
  axios.get('http://acc07.server.ehlel.com/database/DB.php', {
        params: {
            type: "GET_NAMES",
            day: day,
            money: money,
            visited: visited,
            date: date
        }
    })
    .then(function (response) {
     var data = response.data;
        dispatcher.dispatch({type: "RECEIVE_DATA", data});
      })
    .catch(function (error) {
        console.log(error);
    });
}
export function reloadCurrentTour(val){
  console.log(val)
   axios.get('http://acc07.server.ehlel.com/database/DB.php', {
        params: {
            type: "GET_TOURS",
            name: val,
        }
    })
    .then(function (response) {
        var data = response.data;
        dispatcher.dispatch({type: "RECEIVE_CURRENT_DATA", data});
    })
    .catch(function (error) {
        console.log(error);
    });
}
export function createTour(val){
	dispatcher.dispatch({
		type: "CREATE_TOUR",
		val,
	});
}
export function deleteTour(id){
	dispatcher.dispatch({
		type: "DELETE_TOUR",
		id,
	});
}