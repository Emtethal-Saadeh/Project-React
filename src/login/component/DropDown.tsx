/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useAppStore } from '../../context/app-store';



const DropDown: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<string>('Normal User');
    const { setusername, setrole } = useAppStore();


    const handleSelect = (eventKey: string | null) => {
        setSelectedRole(eventKey ?? 'Normal User'); 
        setrole(eventKey ?? 'Normal User');
        
    };
  
    return (
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedRole}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
          <Dropdown.Item eventKey="Normal User">Normal User</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  
  export default DropDown;