import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home(props) {
    return (
        <Container>
            <Row className = 'my-2 justify-content-center'> { props.card } </Row > 
        </Container> 
    );
}

export default Home;