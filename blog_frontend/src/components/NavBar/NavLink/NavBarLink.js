import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarLink.less';

 const NavBarLink = props => {
     return (
            <li className={styles.NavLink}
                onClick={props.clicked}>
                 <NavLink
                     exact
                     to={props.link} activeClassName={styles.active}>
                      {props.content}
                 </NavLink>
            </li>
     )
 };
export default NavBarLink;