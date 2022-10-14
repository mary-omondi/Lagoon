import React,{Component} from "react";
import axios from "axios";
/*import "./users.css";*/

class Patients extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userCollection:[],
        };
    }
    componentDidMount(){
        axios
        .get("http://localhost:8080/patients")
        .then((res) => {
            this.setState({userCollection: res.data});
        })
        .catch((error) =>{
            console.log(error)
        });
    }
    render(){
        return(
            <div className="rate">
                <table>
                    <thead>
                        <tr className="mary">
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>AppointmentTime</th>
                            <th>AppointmentDate</th>
                            <th>Select A Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userCollection.map((patients,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>{user.appointmenttime}</td>
                                    <td>{user.appointmentdate}</td>
                                    <td>{user.selectadoctor}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Patients;







