import React, { useState } from 'react';
import {  Navbar,NavbarBrand,NavbarToggler,Collapse ,Nav, NavItem } from 'reactstrap';
import {NavLink } from 'react-router-dom';
import './Header.css';


function Header(props) {
    let parcat=null;  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const [toggleBtn, settoggleBtn] =useState(false);
    const changetoggleBtn = () =>{
        settoggleBtn(!toggleBtn);
    }
    parcat=props.categoryitems.map((el,index) =>{                                     
        return <NavItem>
            <NavLink to={`/${el._id}`} className="nav-link text-white fs-2" style={{cursor:"pointer", fontFamily:"Roboto+Mono", fontSize:"1.5rem"}} key={Math.random()}>{el.catname}</NavLink>
        </NavItem>
    })
    return (
            <div>
                <Navbar dark style={{backgroundColor:"#37350d",padding:"0"}} expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={changetoggleBtn}/>
                            <NavbarBrand className="mr-auto Brand  ml-md-5"  style={{cursor:"pointer"}}>
                            <NavLink to="/" style={{fontFamily: "hanalei",fontSize:"4rem",textDecoration:"none"}}>NEWSBD</NavLink>
                        </NavbarBrand>
                        <Collapse isOpen={toggleBtn}  navbar>
                            <Nav className="ml-auto" navbar>
                                {
                                    parcat
                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
}
export default Header;


