import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import apiMovies from '../../utils/MoviesApi';


function App() {

  const [isBurgerPopup, setIsBurgerPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesCards, setMoviesCards] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  function handleLogOut() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate("/", { replace: true });
  }

  function changeLoggedInState(){
    setIsLoggedIn(true);
  }

  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleRegistedSubmit(evt) {
    evt.preventDefault();
    auth.register(formValue.name, formValue.email, formValue.password).then((res) => {
      if (res) {
        navigate('/signin', { replace: true });
      }
    }).catch((err) => {
      if (err.status === 400) {
        console.log('Некорректно заполнено одно из полей');
      }

    })
  }

  // function handleLoginSubmit(evt) {
   // evt.preventDefault();
   // handleLogIn();   
 // }  

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    auth.authorize(formValue.email, formValue.password)
    .then((data) => {
      if (data.token) {
        changeLoggedInState();
        setFormValue({ email: '', password: '' });
        navigate('/movies', { replace: true });
      }
    }).catch((err) => {
      if (err.status === 400) {
        console.log('не передано одно из полей');
      }
      if (err.status === 401) {
        console.log('пользователь с email не найден');
      }
    });
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      }).catch((error) => {
        if (error.status === 400) {
          console.log('Токен не передан или передан не в том формате');
        }
        if (error.status === 401) {
          console.log('Переданный токен некорректен');
        }
      });
    }
  }
  
  function handleUpdateUser(data) {
    mainApi.changeUserInfo(data)
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch(console.error)
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        handleClosePopup();
      }
    }
    if (setIsBurgerPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [setIsBurgerPopup]);

  function handleOpenPopup() {
    setIsBurgerPopup(true);
  }

  function handleClosePopup() {
    setIsBurgerPopup(false);
  }

  React.useEffect(() => {
    function getAllMovies() {
      setIsLoading(true);
      apiMovies.getMovies()
        .then((moviesData) => {
          setMoviesCards(moviesData);
        })
        .catch(console.error)
        .finally(() => {
          setIsLoading(false);
        });
    }
  });



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          isOpen={handleOpenPopup} />
        <BurgerPopup
          isOpen={isBurgerPopup}
          onClose={handleClosePopup} />
        <Routes>
          <Route path="/" element={
            <Main
              onBurgerPopup={handleOpenPopup}
              isLoggedIn={isLoggedIn} />} />
          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn} />}
          />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            isLoading={isLoading} 
            isLoggedIn={isLoggedIn}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<ProtectedRouteElement
            element={Profile}
            isExit={handleLogOut}
            onUpdateUser={handleUpdateUser}
            isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<Register
            onSubmit={handleRegistedSubmit}
            handleChange={handleChange}
            name={formValue.name}
            email={formValue.email}
            password={formValue.password} />} />
          <Route path="/signin" element={<Login
            onSubmit={handleLoginSubmit}
            handleChange={handleChange}
            email={formValue.email}
            password={formValue.password} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
