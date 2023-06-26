import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function ReadBeer(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant = "primary" onClick = { handleShow } >Détail</Button>
            <Modal show = { show } onHide = { handleClose } >
                <Modal.Header><h2>{props.title}</h2></Modal.Header>
                <Modal.Body>
                    <h3>{props.tagline}</h3>
                    <ListGroup as="ul">
                        {props.ing}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button variant = "warning" onClick = { handleClose } > Close </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ReadBeer;