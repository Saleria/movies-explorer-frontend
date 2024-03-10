import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ isLogged, isOpen }) {
    const { pathname } = useLocation();
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width < breakpoint) {
        return (!isLogged ? (<header className={
            pathname === "/" ? "header" : "header header_black" &&
                pathname === "/signin" ? "header__disable" : pathname === "/" ? "header" : "header header_black" &&
                    pathname === "/signup" ? "header__disable" : pathname === "/" ? "header" : "header header_black"}>
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                <ul className="header__links">
                    <li className="header__register">
                        <Link to="/signup"
                            className="header__register-text">
                            Регистрация
                        </Link>
                    </li>
                    <li className="header__enter">
                        <Link to="/sigin"
                            className="header__enter-text">
                            Вход
                        </Link>
                    </li>
                </ul>
            </div>
        </header>) : (<header className={
            pathname === "/" ? "header" : "header header_black" &&
                pathname === "/signin" ? "header__disable" : pathname === "/" ? "header" : "header header_black" &&
                    pathname === "/signup" ? "header__disable" : pathname === "/" ? "header" : "header header_black"}>
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                <button className={
                    pathname === "/" ? "header__open-menu" : "header__open-menu header__open-menu_black"}
                    type="button"
                    onClick={isOpen} />
            </div>
        </header>))
    }
    return (
        !isLogged ? (<header className={
            pathname === "/" ? "header" : "header header_black" &&
                pathname === "/signin" ? "header__disable" : pathname === "/" ? "header" : "header header_black" &&
                    pathname === "/signup" ? "header__disable" : pathname === "/" ? "header" : "header header_black"}>
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                <ul className="header__links">
                    <li className="header__register">
                        <Link to="/signup"
                            className="header__register-text">
                            Регистрация
                        </Link>
                    </li>
                    <li className="header__enter">
                        <Link to="/signin"
                            className="header__enter-text">
                            Вход
                        </Link>
                    </li>
                </ul>
            </div>
        </header>) : (<header className={
            pathname === "/" ? "header" : "header header_black" &&
                pathname === "/signin" ? "header__disable" : pathname === "/" ? "header" : "header header_black" &&
                    pathname === "/signup" ? "header__disable" : pathname === "/" ? "header" : "header header_black"}>
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                {<Navigation />}
            </div>
        </header>
        )
    );
}

export default Header;