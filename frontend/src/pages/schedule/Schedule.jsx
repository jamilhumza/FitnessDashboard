import { Component } from "react";
import ScheduleService from "../../services/ScheduleService";
import "./schedule.css";

class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    }

    this.changeMondayHandler = this.changeMondayHandler.bind(this);
    this.changeTuesdayHandler = this.changeTuesdayHandler.bind(this);
    this.changeWednesdayHandler = this.changeWednesdayHandler.bind(this);
    this.changeThursdayHandler = this.changeThursdayHandler.bind(this);
    this.changeFridayHandler = this.changeFridayHandler.bind(this);
    this.changeSaturdayHandler = this.changeSaturdayHandler.bind(this);
    this.changeSundayHandler = this.changeSundayHandler.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);

  }

  saveSchedule = (e) => {
    e.preventDefault();
    let schedule = {monday: this.state.monday, tuesday: this.state.tuesday, wednesday: this.state.wednesday, thursday: this.state.thursday, friday: this.state.friday, saturday: this.state.saturday, sunday: this.state.sunday};
    
    ScheduleService.createSchedule(schedule).then(res=>{
      this.props.history.push('/');
    });
  }

  changeMondayHandler= (event) => {
    this.setState({monday: event.target.value});
  }

  changeTuesdayHandler= (event) => {
    this.setState({tuesday: event.target.value});
  }

  changeWednesdayHandler= (event) => {
    this.setState({wednesday: event.target.value});
  }

  changeThursdayHandler= (event) => {
    this.setState({thursday: event.target.value});
  }

  changeFridayHandler= (event) => {
    this.setState({friday: event.target.value});
  }

  changeSaturdayHandler= (event) => {
    this.setState({saturday: event.target.value});
  }

  changeSundayHandler= (event) => {
    this.setState({sunday: event.target.value});
  }

  cancel() {
    this.props.history.push('/');
  }

  render() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Workout Schedule</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Sunday</label>
          <input type="text" placeholder="Push" name="monday" value={this.state.monday} onChange={this.changeMondayHandler} />
        </div>
        <div className="newUserItem">
          <label>Monday</label>
          <input type="text" placeholder="Pull" name="tuesday" value={this.state.tuesday} onChange={this.changeTuesdayHandler} />
        </div>
        <div className="newUserItem">
          <label>Tuesday</label>
          <input type="text" placeholder="Legs" name="wednesday" value={this.state.wednesday} onChange={this.changeWednesdayHandler} />
        </div>
        <div className="newUserItem">
          <label>Wednesday</label>
          <input type="text" placeholder="Push" name="thursday" value={this.state.thursday} onChange={this.changeThursdayHandler} />
        </div>
        <div className="newUserItem">
          <label>Thursday</label>
          <input type="text" placeholder="Pull" name="friday" value={this.state.friday} onChange={this.changeFridayHandler} />
        </div>
        <div className="newUserItem">
          <label>Friday</label>
          <input type="text" placeholder="Legs" name="saturday" value={this.state.saturday} onChange={this.changeSaturdayHandler} />
        </div>
        <div className="newUserItem">
          <label>Saturday</label>
          <input type="text" placeholder="Rest" name="sunday" value={this.state.sunday} onChange={this.changeSundayHandler} />
        </div>
       
      
        <button className="newUserButton" onClick={this.saveSchedule}>Submit</button>
        <button className="newDeleteButton"  onClick={this.cancel.bind(this)}>Cancel</button>
      </form>
    </div>
  );
}
}

export default Schedule;
