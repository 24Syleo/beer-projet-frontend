import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CardBeer(props) {
    return (

        <
        Col sm = { 4 } >
        <
        Card style = {
            { width: '18rem', height: '40rem' }
        } >
        <
        Card.Img variant = "top"
        src = { props.image }
        / > <
        Card.Body >
        <
        Card.Title > { props.name } < /Card.Title> <
        Card.Text > { props.tagline } <
        /Card.Text> <
        Button variant = "primary" > Go somewhere < /Button> < /
        Card.Body > <
        /Card> < /
        Col >
    )
}

export default CardBeer;