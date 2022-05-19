import React, { Component } from 'react';
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import { Outlet, Link } from "react-router-dom";

export default class NavbarComponents extends Component {
  render() {
    return (
        <div>
            <Navbar bg='dark' variant='dark' sticky='top' expand='md'>
                <Navbar.Brand>
                    <img src={logo} width={40} height={40}/>
                    React Movie Lister
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link  as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link  as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
      </div>
    )
  }
}
