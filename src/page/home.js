import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home(props) {
    return ( 
        <Stack gap = { 2 }>
            <Container> { props.navbar } </Container>
            <Container>
                <Row className = 'my-2 justify-content-center'> { props.card } </Row > 
            </Container> 
        </Stack >
    );
}

export default Home;