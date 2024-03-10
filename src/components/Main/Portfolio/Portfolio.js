import React from "react";
import icon_arrow from "../../../images/icon_arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links">
                <a className="portfolio__link"
                    href="https://github.com/Saleria/how-to-learn"
                    target="_blank"
                    rel="noopener noreferrer">
                    Статичный сайт<img src={icon_arrow}
                        className="portfolio__img"
                        alt="стрелка для перехода в репозиторий GitHub" />
                </a>
                <a className="portfolio__link"
                    href="https://github.com/Saleria/russian-travel"
                    target="_blank"
                    rel="noopener noreferrer">
                    Адаптивный сайт<img src={icon_arrow}
                        className="portfolio__img"
                        alt="стрелка для перехода в репозиторий GitHub" />
                </a>
                <a className="portfolio__link"
                    href="https://github.com/Saleria/react-mesto-api-full-gha"
                    target="_blank"
                    rel="noopener noreferrer">
                    Одностраничное приложение<img src={icon_arrow}
                        className="portfolio__img"
                        alt="стрелка для перехода в репозиторий GitHub" />
                </a>
            </div>
        </section>
    );
}

export default Portfolio;