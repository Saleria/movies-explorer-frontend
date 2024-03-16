import React from "react";

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">
                Технологии
            </h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__subscription">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__table">                
                <li className="techs__table-cell">
                    <p className="techs__table-text">HTML</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">CSS</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">JS</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">React</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">Git</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">Express.js</p>
                </li>
                <li className="techs__table-cell">
                    <p className="techs__table-text">mongoDB</p>
                </li>

            </ul>

        </section>
    );
}

export default Techs;