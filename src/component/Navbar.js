import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react';

function BarreDeNav(props) {
    return ( <
        Navbar bg = "light"
        variant = "light" >
        <
        Container >
        <
        Nav className = "mx-auto" >
        <
        Nav.Link href = "home" > home < /Nav.Link> <
        Nav.Link href = "features" > features < /Nav.Link> < /
        Nav > { props.children } <
        /Container> < /
        Navbar >
    )
}

export default BarreDeNav