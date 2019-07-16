import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <NavLink to ="/">jeremy parker</NavLink>
      <NavLink to ="/about">about</NavLink>
      <NavLink to ="/sites">sites</NavLink>
    </div>
  )
}
