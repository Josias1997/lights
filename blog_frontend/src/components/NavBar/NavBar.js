import React from 'react';
import NavLink from './NavLink/NavLink';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <Aux>
            <ul className={"NavBar"}>
                 {props.links.map((link, index) => (
                <NavLink key={index} content={link.value} link={link.link}/>
            ))}
            </ul>
        </Aux>
    )
};
export default NavBar;