import dispatcher from "../dispatcher.js";
import axios from 'axios';

<<<<<<< HEAD
export function reloadTour(day, money, visited, date){
  axios.get('https://tourplanner.000webhostapp.com/database/DB.php', {
=======


export function reloadTour(day, money, visited, date){
  axios.get('http://tourplanner.orgilconsulting.com/database/DB.php', {
>>>>>>> master
        params: {
            type: "GET_NAMES",
            day: day,
            money: money,
            visited: visited,
            date: date
        }
    })
    .then(function (response) {
        dispatcher.dispatch({type: "FETCH_DATA"});
        setTimeout(()=>{
            var data = response.data;
            dispatcher.dispatch({type: "RECEIVE_DATA", data});
        }, 1);
      })
    .catch(function (error) {
        dispatcher.dispatch({type: "FETCH_ERROR"});
        console.log(error);
    });
}

export function reloadCurrentTour(val){
<<<<<<< HEAD
  console.log(val)
<<<<<<< HEAD
   axios.get('https://tourplanner.000webhostapp.com/database/DB.php', {
=======
=======
>>>>>>> master
   axios.get('http://tourplanner.orgilconsulting.com/database/DB.php', {
>>>>>>> master
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