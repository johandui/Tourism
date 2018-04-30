import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";
class TourPlanStore extends EventEmitter{
	constructor(props) {
	  super(props);
	  this.tours = [];
	}
	setInit(data){
		this.tours = data;
	}
	getAll(){
		return this.tours;
	}
	createTourPlan(val){
		this.tours.push(val);
		this.emit("change");
	}
	addTourPlan(id, data){
		var t = this;
		t.tours[id].tour = [];
		
		t.tours[id].tour = data;
	}
	handleActions(action){
		switch(action.type){
			case "CREATE_TOUR": 
			this.createTourPlan(action.val); break;
			case "RECEIVE_DATA":
				action.data.map((count) => {
					this.tours.push({name: count});
					
				});
				this.emit("change"); break;
			case "DELETE_TOUR": break;
			case "RECEIVE_CURRENT_DATA":
				this.tours.map((data, count) => {
					if(data.name == action.data[0].tour_plan_name){
						this.addTourPlan(count, action.data);
					}
				});
				this.emit("change"); 
			break;
		}
	}

}
const tourPlanStore = new TourPlanStore;
dispatcher.register(tourPlanStore.handleActions.bind(tourPlanStore));

export default tourPlanStore;