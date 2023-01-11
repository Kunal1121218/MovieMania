import React, { useContext, useState } from 'react'
import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Genre from './pages/genre/Genre';
import Navbar from './Component/navbar/Navbar';
import { ThemeContext } from './context/themeContext';
import { SmContext } from './context/smContext';
import WishList from './pages/wishList/WishList';
import MovieDetails from './Component/movieDetails/MovieDetails';




const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const { showDetails } = useContext(SmContext);
  

  return (
    <div className={darkMode ? "dark" : "light"}>
      
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/genre" element={<Genre />} />
          <Route exact path="/wishList" element={<WishList />} />
        </Routes>
    </BrowserRouter>
    {showDetails && <MovieDetails/>}
    </div>

  )
}

export default App
