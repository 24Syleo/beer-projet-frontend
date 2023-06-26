import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function CardBeer(props) {
    return (
        <Col md = { 4 } className = "my-2 text-center" >
            <Card style = {{ width: '14rem' }} className='shadow-lg pt-2'>
                <Card.Img className = 'imageCard mx-auto' variant = "top" src = { props.image }/ >
                <Card.Body>
                    <Card.Title > { props.name } < /Card.Title> 
                    <Card.Text > { props.tagline } </Card.Text>
                    <Stack direction="horizontal" gap={1}>
                        {props.read}
                        {props.delete}
                    </Stack>
                </Card.Body> 
            </Card>
        < /Col >
    )
}

export default CardBeer;