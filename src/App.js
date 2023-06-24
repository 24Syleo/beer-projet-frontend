import './App.css';
import React from 'react';
import Home from './page/home.js';
import BarreDeNav from './component/Navbar.js';
import CardBeer from './component/CardBeer.js';
import BeerController from './controller/beerController.js';


function App() {
    const beers = BeerController.getBeers();
    console.log(beers);

    return ( <
        Home navbar = { < BarreDeNav / > }
        card = { < CardBeer / > }
        />);
    }
    export default App;