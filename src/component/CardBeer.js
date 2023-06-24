import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function CardBeer(props) {
    return (

        <
        Col md = { 4 }
        className = "my-2" >
        <
        Card style = {
            { width: '18rem' }
        } >
        <
        Card.Img className = 'imageCard'
        variant = "top"
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