import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>
            <div className="footer__container">
                <p className="footer__info">© 2024</p>
                <div className="footer__platform">
                    <a className="footer__info footer__info-link"
                        href="https://practicum.yandex.ru/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__info footer__info-link"
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;