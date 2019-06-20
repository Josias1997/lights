import React from 'react';
import NavLink from './NavLink/NavLink';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './NavBar.less';
import HomeButton from "./HomeButton/HomeButton";

const NavBar = (props) => {
    const { links, open, clicked} = props;
    return (
        <Aux>
            <nav>
                <HomeButton clicked={clicked}/>
                <ul className={open ? styles.NavBarOpen:styles.NavBar}>
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