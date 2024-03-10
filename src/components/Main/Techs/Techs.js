import React from "react";

function Techs() {
    return (
        <section className="techs">
            <h2 className="project__title">
                Технологии
            </h2>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__table">                
                <li className="table__cell">
                    <p className="table__text">HTML</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">CSS</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">JS</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">React</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">Git</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">Express.js</p>
                </li>
                <li className="table__cell">
                    <p className="table__text">mongoDB</p>
                </li>

            </ul>

        </section>
    );
}

export default Techs;