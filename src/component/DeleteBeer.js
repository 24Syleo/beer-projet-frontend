import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteBeer(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant = "danger" onClick = { handleShow } >Supprimer</Button>
            <Modal show = { show } onHide = { handleClose } >
                <Modal.Header><h2>Etes-vous de vouloir la supprimer</h2></Modal.Header>
                <Modal.Footer className='justify-content-center'>
                    <Button variant = "warning" onClick = { handleClose } > Non </Button>
                    <Button variant="danger" id={props.id} onClick={props.suppr} >Oui</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteBeer;