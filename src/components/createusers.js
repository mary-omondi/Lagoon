import  React, {Component} from 'react'
import axios from "axios";

/*import "./createusers.css";*/

class CreateUser extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      phoneNumber:"",
      appointmentTime:"",
      appointmentDate:"",
      selectADoctor:"",
    };
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };
  
  handleAppointmentTime = (event) => {
    this.setState({
      appointmentTime: event.target.value,
    });
  };
  handleAppointmentDate = (event) => {
    this.setState({
      appointmentDate: event.target.value,
    });
  };
  handleSelectADoctor = (event) => {
    this.setState({
      selectADoctor: event.target.value,
    });
  };
  handleSubmit=event=>{
    event.preventDefault();
    const patientObject = {
      name:this.state.name,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      appointmentTime:this.state.appointmentTime,
      appointmentDate:this.state.appointmentDate,
      selectADoctor:this.state.selectADoctor,
    };
    axios
    .post("http://localhost:8080/patients", patientObject)
    .then((response) => {
      console.log(response.data);
      this.props.history.push("/")
    })
    .catch((error) => {
      console.log(error);
    });
};
  render () {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className='may'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" value= {this.state.name}
            onChange={this.handleName}/>
          </div>
          <div className='jay'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" value={this.state.email}
            onChange={this.handleEmail}/>
          </div>
          <div className='yay'>
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input type="phoneNumber" placeholder="phone number" value={this.state.phoneNumber}
            onChange={this.handlePhoneNumber}/>
          </div>
          <div className='joy'>
            <label htmlFor="appointmentTime">AppointmentTime</label>
            <input type="text" placeholder="appointment time" value={this.state.appointmentTime}
            onChange={this.handleAppointmentTime}/>
          </div>
          <div className='ay'>
            <label htmlFor="appointmentDate">AppointmentDate</label>
            <input type="text" placeholder="appointment date" value={this.state.appointmentDate}
            onChange={this.handleAppointmentDate}/>
          </div>
          <div className='vr'>
            <label htmlFor="selectADoctor">SelectADoctor</label>
            <input type="text" placeholder="select a doctor" value={this.state.selectADoctor}
            onChange={this.handleSelectADoctor}/>
          </div>
          <button>Create user </button>
        </form>
      </div>
    );
  };
};

export default CreateUser;

