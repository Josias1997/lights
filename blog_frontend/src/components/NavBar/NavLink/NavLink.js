import React from 'react';
import { Link } from "react-router-dom";
import './NavLink.css';

 const NavLink = props => {
     return (
            <li className={"NavLink"}>
                 <Link to={props.link}>
                      {props.content}
                 </Link>
            </li>
     )
 };
export default NavLink;