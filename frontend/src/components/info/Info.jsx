import "./info.css";
import ScheduleService from "../../services/ScheduleService";
import React, { Component } from "react";

var todayWorkout = '';

class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {
            schedule: [],
            todayWorkout: ''
    }
   
}

componentDidMount(){
  ScheduleService.getSchedule().then((res) => {
      this.setState({ schedule: res.data});
  });

var d = new Date();
var n = d.getDay()
var day = '';
if (n === 0) {
  day = 'sunday';
}
else if (n === 1) {
  day = 'monday';
}
else if (n === 2) {
  day = 'tuesday';
}
else if (n === 3) {
  day = 'wednesday';
}
else if (n === 4) {
  day = 'thursday';
}
else if (n === 5) {
  day = 'friday';
}
else {
  day = 'saturday';
}
todayWorkout = 'schedule.' + day;
}



  render() {
    
  return(
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Today's Workout</span>
        <div className="featuredMoneyContainer">
          {
            this.state.schedule.map (
              schedule =>
          <span className="featuredMoney">{todayWorkout}</span>
            )
  }
        </div>
      
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Current Weight</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">145 lbs</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Caloric Intake</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2200 calories</span>
         
        </div>
      </div>
    </div>
    )
    }
  }
  
export default Info;