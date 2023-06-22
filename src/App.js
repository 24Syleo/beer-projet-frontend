import './App.css';
import React from 'react';
import BeerController from './controller/beerController.js';

function App() {

    BeerController.getBeers();

    return ( <
        h1 > hello < /h1>
    );
}

export default App;