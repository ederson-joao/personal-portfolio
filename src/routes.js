import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/skills' element={<Skills/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;