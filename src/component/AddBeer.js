import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddBeer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button variant = "secondary" onClick = { handleShow } >Ajouter une bière </Button>
            <Modal show = { show } onHide = { handleClose } >
            <Modal.Body>
                <Form>
                    <Form.Control className='my-2' type='text' placeholder='name' autoFocus/>
                    <Form.Control className='my-2' type='text' placeholder='tagline' autoFocus/>
                    <Form.Control className='my-2' type='text' placeholder='image' autoFocus/>
                    <Button variant='outline-success' type='submit'>Valider</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "danger" onClick = { handleClose } > Close </Button>
            </Modal.Footer>
            </Modal >
        </>
    )
}

export default AddBeer;