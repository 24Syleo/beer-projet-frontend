import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './page/home.js';
import BarreDeNav from './component/Navbar.js';
import CardBeer from './component/CardBeer.js';
import BeerController from './controller/beerController.js';
import AddBeer from './component/AddBeer.js';


function App() {

    const [beerList, setBeerList] = useState([]);
    const [nameBeer, setNameBeer] = useState();
    const [tagBeer, setTagBeer] = useState();
    const [imgBeer, setImgBeer] = useState();

    const list = async() => {
        const response = await BeerController.getBeers();
        setBeerList(response);
    };

    const nameChange = (evt)=>{
        console.log(evt.target.value);
        evt.preventDefault();
        setNameBeer(evt.target.value);
    }

    const tagChange = (evt)=>{
        setTagBeer(evt.target.value);
    }

    const imgChange = (evt)=>{
        setImgBeer(evt.target.value);
    }

    const valider = () => {
        console.log('ici');
        createBeer();
    }

    const createBeer = async () => {
        const dataBeer = {"name":nameBeer, "tagline":tagBeer, "image_url":imgBeer};
        console.log('app', dataBeer);
        const res = await BeerController.createBeer(dataBeer);
        console.log('response biere', res);
    }

    useEffect(() => {
        list()
    }, []);



    return ( <
            Home navbar = { < BarreDeNav
                children = { < AddBeer
                        validerBeer={valider}
                        ValueName={nameBeer}
                        ChangeName={nameChange}
                        ValueTag={tagBeer}
                        ChangeTag={tagChange}
                        ValueImg={imgBeer}
                        ChangeImg={imgChange}
                    / > }
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