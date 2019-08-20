import React from 'react';
import NavBarLink from './NavLink/NavBarLink';
import styles from './NavBar.less';
import HomeButton from "./HomeButton/HomeButton";
import {connect} from 'react-redux';

const NavBar = (props) => {
    const {clicked} = props;
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <NavBarLink classes={"navbar-brand"} content={props.links[0].value}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <ul className="navbar-nav mr-auto">
                    {props.links.slice(1).map((link, index) => (
                        <NavBarLink
                            key={index}
                            content={link.value}
                            link={link.link}
                            clicked={clicked}
                            classes={"nav-link"}
                        />
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    )
};
const mapStateToProps = state => {
    return {
        links: state.main.links,
        isOpen: state.main.isOpen
    }
};

export default connect(mapStateToProps)(NavBar);