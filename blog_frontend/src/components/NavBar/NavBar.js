import React from 'react';
import NavLink from './NavLink/NavLink';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import './NavBar.css';
import HomeButton from "./HomeButton/HomeButton";

const NavBar = (props) => {
    const { links, open, clicked} = props;
    return (
        <Aux>
            <nav>
                <HomeButton clicked={clicked}/>
                <ul className={open ? "NavBarOpen":"NavBar"}>
                     {links.map((link, index) => (
                        <NavLink
                            key={index}
                            content={link.value}
                            link={link.link}
                            clicked={clicked}
                        />
                        ))}
                </ul>
            </nav>
        </Aux>
    )
};
export default NavBar;