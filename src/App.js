import './App.css';
import ReactDOM from "react-dom/client";
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

    const [ingList, setIngList]=useState([]);
    const [nameBeer, setNameBeer] = useState();
    const [tagBeer, setTagBeer] = useState();
    const [imgBeer, setImgBeer] = useState();
    const [ingBeer, setIngBeer] = useState([])

    const listIng = async() => {
        const response = await IngController.getIngredients();
        setIngList(response);
    }

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

    const ingChange = (evt)=>{
        console.log(evt.target.checked)
        let ingListBeer = [...ingBeer]
        if(evt.target.checked){
            ingListBeer = [...ingBeer,evt.target.id];
        }
        console.log(ingListBeer);
        setIngBeer(ingListBeer);
    } 

    const valider = () => {
        console.log('ici');
        createBeer();
    }

    const createBeer = async () => {
        const dataBeer = {"name":nameBeer, "tagline":tagBeer, "image_url":imgBeer,"ingredients":ingBeer};
        console.log(dataBeer);
        const res = await BeerController.createBeer(dataBeer);
        console.log('creation',res);
    }

    useEffect(() => {
        listIng()
    }, []);

    return (
    <>
        <BarreDeNav
            children = { < AddBeer
                validerBeer={valider}
                ValueName={nameBeer}
                ChangeName={nameChange}
                ValueTag={tagBeer}
                ChangeTag={tagChange}
                ValueImg={imgBeer}
                ChangeImg={imgChange}
                checkIng={
                    ingList.map((ing,i) => {
                        return(<CheckIng
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
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path="features" element={<FigureExample/>}/>
        </Routes>
    </BrowserRouter>
    </>
    );
}
export default App;