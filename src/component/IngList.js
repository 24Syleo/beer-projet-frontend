import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupIng(props){
    return(
        <ListGroup.Item as="li">{props.cereal} {props.name} {props.amount}</ListGroup.Item>
    )
}

export default ListGroupIng;