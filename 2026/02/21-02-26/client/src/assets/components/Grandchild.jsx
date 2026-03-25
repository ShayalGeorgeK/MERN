import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Child = () => {

    //access role directly from context
    const {role} = useContext(UserContext);

  return (
    <div>
        <h3>Child Component</h3>
        <p>{role}</p>
    </div>
  );
};

export default Child;