import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './page/home.js';
import BarreDeNav from './component/Navbar.js';
import CardBeer from './component/CardBeer.js';
import BeerController from './controller/beerController.js';
import AddBeer from './component/AddBeer.js';


function App() {

    const [beerList, setBeerList] = useState([]);

    const list = async() => {
        const response = await BeerController.getBeers();
        setBeerList(response);
    };

    useEffect(() => {
        list()
    }, []);

    console.log(beerList);

    return ( <
            Home navbar = { < BarreDeNav
                children = { < AddBeer / > }
                / > }
                card = {
                    beerList.map((beer, i) => {
                            return ( < CardBeer key = { i }
                                image = { beer.image_url }
                                name = { beer.name }
                                tagline = { beer.tagline }
                                / > )
                            })
                    }
                    />);
                }
                export default App;