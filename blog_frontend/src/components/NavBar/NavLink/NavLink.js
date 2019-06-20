import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavLink.less';

 const NavLink = props => {
     return (
            <li className={styles.NavLink} onClick={props.clicked}>
                 <Link to={props.link}>
                      {props.content}
                 </Link>
            </li>
     )
 };
export default NavLink;