import React from "react";
import { NavLink } from "react-router-dom";
/*import "./header.css";*/

const Header = () => {
    return (
        <div className="a">
            <NavLink to="/" activeClassName="active" exact = {true}>Patients</NavLink>
            <NavLink to="/createuser" activeClassName="is-active">Create User</NavLink>
            
        </div>
    );
};
export default Header;