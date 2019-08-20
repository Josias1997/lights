import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavBarLink.less';

const NavBarLink = props => {
    const {clicked, link, content, classes} = props;
    return (
        <li className={"nav-item"}
            onClick={clicked}>
            <a className={classes}>
                <NavLink
                    exact
                    to={link} activeClassName={"active"}>
                    {content}
                </NavLink>
            </a>

        </li>
    )
};
export default NavBarLink;