import React from "react";
import { Link, useLocation } from "react-router-dom";
import account from "../../images/account-img.svg";

function Navigation() {
    const { pathname } = useLocation();
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/movies"
                        className="navigation__link">
                        Фильмы
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/saved-movies"
                        className="navigation__link">
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
            <ul className="popup__navigation-list">
                <li className={pathname === "/" ? "popup-navigation-button popup-navigation-button_main" : "popup-navigation-button"}>
                    <Link to="/profile"
                        className="popup-navigation-button-link">
                        Аккаунт
                        <img className={pathname === "/" ? "popup__navigation-img popup__navigation-img_main" : "popup__navigation-img"}
                            alt="Значок аккаунта"
                            src={account} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;