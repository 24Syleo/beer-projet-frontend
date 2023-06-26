import React, { useEffect, useState } from 'react';
import BeerController from '../controller/beerController.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardBeer from '../component/CardBeer.js';
import DeleteBeer from '../component/DeleteBeer.js';
import ReadBeer from '../component/ReadBeer.js';
import ListGroupIng from '../component/IngList.js';

function Home(props) {

    const [beerList, setBeerList] = useState([]);

    const list = async() => {
        const response = await BeerController.getBeers();
        setBeerList(response);
    };

    const supprBeer = (evt) => {
        let beerId = evt.target.id;
        deleteBiere(beerId);
        window.location.reload();
    }

    const deleteBiere = async (beerId) => {
        const res = await BeerController.deleteBeer(beerId);
        console.log('effacer', res);
    }

    useEffect(() => {
        list()
    }, []);


    return (
        <Container>
            <Row className = 'my-2 justify-content-center'>
                {beerList.map((beer, i) => {
                            return ( < CardBeer key = { i }
                                image = { beer.image_url }
                                name = { beer.name }
                                tagline = { beer.tagline }
                                read={<ReadBeer
                                    title={beer.name}
                                    tagline={beer.tagline}
                                    ing={beer.ingredients.map((ing,i) => {
                                        return (<ListGroupIng
                                            key={i}
                                            cereal={ing.cereal}
                                            name={ing.name}
                                            amount={ing.amount.map((amt,i) => {
                                                return(amt.value + ' ' + amt.unit )
                                            })}
                                        />)
                                    }
                                        )}
                                    />}
                                delete={<DeleteBeer
                                    id={beer._id}
                                    suppr={supprBeer}
                                    />}
                                / > )
                            })}    
            </Row > 
        </Container> 
    );
}

export default Home;