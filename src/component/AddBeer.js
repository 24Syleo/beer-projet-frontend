import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddBeer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Button variant = "secondary" onClick = { handleShow } >Ajouter une bière </Button>
            <Modal show = { show } onHide = { handleClose } >
            <Modal.Footer>
                
                <Button variant = "danger" onClick = { handleClose } > Close </Button>
            </Modal.Footer>
            </Modal >
        </>
    )
}

export default AddBeer;