import React from "react";
import { Link, NavLink } from "react-router-dom";
import account from "../../images/account-img.svg";
function BurgerPopup({ isOpen, onClose }) {

    return (
        <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <button className="popup__close"
                type="button"
                onClick={onClose} />
            <div className="popup__container">
                <ul className="popup__navigation-list">
                    <li className="popup__navigation-item">
                        <NavLink to="/"
                            className={({ isActive }) => `popup__navigation-text ${isActive ? "popup__navigation-text_active" : ""}`}>
                            Главная
                        </NavLink>
                    </li>
                    <li className="popup__navigation-item">
                        <NavLink to="/movies"
                            className={({ isActive }) => `popup__navigation-text ${isActive ? "popup__navigation-text_active" : ""}`}>
                            Фильмы
                        </NavLink>
                    </li>
                    <li className="popup__navigation-item">
                        <NavLink to="/saved-movies"
                            className={({ isActive }) => `popup__navigation-text ${isActive ? "popup__navigation-text_active" : ""}`}>
                            Сохранённые фильмы
                        </NavLink>
                    </li>
                </ul>
                <ul className="popup__navigation-list">
                    <li className="popup-navigation-button">
                        <Link to="/profile"
                            className="popup-navigation-button-link">
                            Аккаунт
                            <img className="popup__navigation-img"
                                alt="Значок аккаунта"
                                src={account} />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default BurgerPopup;