import './App.css';
import { socket } from './socket.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import BeerController from './controller/beerController.js';
import IngController from './controller/ingController.js';
import Home from './page/home.js';
import BarreDeNav from './component/Navbar.js';
import AddBeer from './component/AddBeer.js';
import CheckIng from './component/checkIng.js';
import FigureExample from './page/features.js';


function App() {
    
    socket.on("ajoutBeer", (arg1) => {
        console.log("Ciao", arg1); // 1
    })
    
    const [ingList, setIngList] = useState([]);
    const [nameBeer, setNameBeer] = useState();
    const [tagBeer, setTagBeer] = useState();
    const [imgBeer, setImgBeer] = useState();
    const [ingBeer, setIngBeer] = useState([])

    const listIng = async () => {
        const response = await IngController.getIngredients();
        setIngList(response);
    }

    const nameChange = (evt) => {
        evt.preventDefault();
        setNameBeer(evt.target.value);
    }

    const tagChange = (evt) => {
        setTagBeer(evt.target.value);
    }

    const imgChange = (evt) => {
        setImgBeer(evt.target.value);
    }

    const ingChange = (evt) => {
        let ingListBeer = [...ingBeer]
        if (evt.target.checked) {
            ingListBeer = [...ingBeer, evt.target.id];
        }
        setIngBeer(ingListBeer);
    }

    const valider = () => {
        createBeer();
    }

    const createBeer = async () => {
        const dataBeer = { "name": nameBeer, "tagline": tagBeer, "image_url": imgBeer, "ingredients": ingBeer };
        await BeerController.createBeer(dataBeer);
    }

    useEffect(() => {
        listIng()
    }, []);

    return (
        <>
            <BarreDeNav
                children={< AddBeer
                    validerBeer={valider}
                    ValueName={nameBeer}
                    ChangeName={nameChange}
                    ValueTag={tagBeer}
                    ChangeTag={tagChange}
                    ValueImg={imgBeer}
                    ChangeImg={imgChange}
                    checkIng={
                        ingList.map((ing, i) => {
                            return (<CheckIng
                                key={i}
                                idIng={ing._id}
                                Name={ing.name}
                                ChangeIng={ingChange}
                            />)
                        })
                    }
                />}
            />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path="features" element={<FigureExample />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;