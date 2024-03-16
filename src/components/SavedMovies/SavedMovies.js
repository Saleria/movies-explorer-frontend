import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <section className="save">
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </section>
    );
}

export default SavedMovies;