import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import BurgerPopup from '../BurgerPopup/BurgerPopup';

function App() {

  const [isBurgerPopup, setIsBurgerPopup] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  function handleOpenPopup() {
    setIsBurgerPopup(true);
  }
  function handleClosePopup() {
    setIsBurgerPopup(false);
  }

  return (
    <div className="page">
      <Header
        isLogged={isLogged}
        isOpen={handleOpenPopup} />
      <BurgerPopup
        isOpen={isBurgerPopup}
        onClose={handleClosePopup} />
      <Routes>
        <Route path="/" element={
          <Main
            onBurgerPopup={handleOpenPopup}
            isLogged={isLogged} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
