import React from 'react';
import NavBarLink from './NavLink/NavBarLink';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './NavBar.less';
import HomeButton from "./HomeButton/HomeButton";
import { connect } from 'react-redux';

const NavBar = (props) => {
    const {clicked} = props;
    return (
        <Aux>
            <nav>
                <HomeButton clicked={clicked}/>
                <ul className={props.isOpen ? styles.NavBarOpen:styles.NavBar}>
                     {props.links.map((link, index) => (
                        <NavBarLink
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
const mapStateToProps = state => {
     return {
         links: state.main.links,
         isOpen: state.main.isOpen
    }
};

export default connect(mapStateToProps)(NavBar);