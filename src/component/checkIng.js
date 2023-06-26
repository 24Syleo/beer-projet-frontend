import Form from 'react-bootstrap';
import React from 'react';

function CheckIng(props){

    return (
        <Form.Check className='my-2' type='checkbox'  id={props.idIng} onChange={props.ChangeIng} label={props.Name}/>
    );
}

export default CheckIng;