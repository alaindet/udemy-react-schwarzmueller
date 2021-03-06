import React from 'react';
import './Person.css';

const Person = ({
  name,
  age,
  click,
  change,
  children,
}) => {
  return (
    <div className="person">
      <p>
        I am <span className="name">{name}</span> and I am <span className="age">{age}</span> years old
      </p>
      <div className="children">{children}</div>
      <div className="remove" onClick={() => click(name)}>
        Remove
      </div>
      <input type="text" onChange={change} value={name} />
    </div>
  );
};

export default Person;
