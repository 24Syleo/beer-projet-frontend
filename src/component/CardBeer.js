import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBeer(props) {
    return ( <
        Card style = {
            { width: '18rem' }
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
        /Card>
    )
}

export default CardBeer;