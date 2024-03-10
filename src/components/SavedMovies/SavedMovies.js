import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies () {
    return(
        <section className="save">
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Footer />
        </section>
    );
}

export default SavedMovies;