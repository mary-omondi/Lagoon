import React, { useState } from 'react'
import './dropdown.css';


function Dropdown() {
    const [state, setState]= useState(false);
    const showDropdown=()=>{
        setState(true);
    }
    const hideDropdown=()=>{
        setState(false);
    }
  return (
    <div className="dropdown">
      <div className='dropdown-menu' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        Select A Doctor
        {state ?(<ul className="dropdown-menu"onMouseEnter={showDropdown}>
            <li>Doc.Juliet-Dentist</li>
            <li>Doc.Kui -Optician</li>
            <li>Doc.Mary -Veterinary</li>
            <li>Doc.Tune -Pediatrician</li>
        </ul>):null}
      </div>
    </div>
  );
}

export default Dropdown;