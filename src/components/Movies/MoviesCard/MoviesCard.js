import React from "react";
import MoviesImg from "../../../images/movies-img.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {
    const location = useLocation();
    const [isLiked, setIsLiked] = React.useState(false);
    const cardLikeButtonClassName = (
        `film__button ${isLiked && 'film__button_active'}`
    );
    const setPath = location.pathname === "/saved-movies";
    function setButtonState () {
        setIsLiked(!isLiked);
    }
    return (
        <li className="film">
            <div className="film__container">
                <h2 className="film__title">
                    В погоне за Бенкси
                </h2>
                <p className="film__time">0ч 42м</p>
            </div>
            <img className="film__img" alt="Кадр из фильма" src={MoviesImg} />
            <button className={setPath ? "film__button-delete" : cardLikeButtonClassName}
                onClick={setButtonState}
            ></button>
        </li>
    );
}

export default MoviesCard;