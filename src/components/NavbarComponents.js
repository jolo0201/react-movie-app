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
                        <NavDropdown title='Movies'>
                            <NavDropdown.Item as={Link} to={"/trending"}>Trending</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item as={Link} to={"/popular"}>Popular</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/latest"}>Latest</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link  as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link  as={Link} to={"/contact"}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
      </div>
    )
  }
}
