import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarLink.less';

 const NavBarLink = props => {
     const {clicked, link, content} = props;
     return (
            <li className={styles.NavLink}
                onClick={clicked}>
                 <NavLink
                     exact
                     to={link} activeClassName={styles.active}>
                      {content}
                 </NavLink>
            </li>
     )
 };
export default NavBarLink;