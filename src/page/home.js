import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function Home(props) {
    return ( <
        Stack gap = { 2 } >
        <
        Container > { props.navbar } < /Container> <
        Container > { props.card } <
        /Container> < /
        Stack >
    );
}

export default Home;