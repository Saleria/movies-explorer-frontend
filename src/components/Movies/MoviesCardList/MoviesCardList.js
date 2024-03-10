import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return(
        <section className="films">
            <ul className="films__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="films_add">Ещё</button>
        </section>
    );
}

export default MoviesCardList;