import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="site-title">
                    <h1>Website Title</h1>
                </div>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/detailedPage">
                        Detailed Page
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;