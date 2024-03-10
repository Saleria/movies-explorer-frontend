import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies() {
    const [isLoading, setIsLoading] = React.useState(true);
    return (
        <section className="movies">
            <SearchForm />
            <FilterCheckbox />
            {isLoading ? <Preloader /> : <MoviesCardList />}
            <Footer />
        </section>
    );
}

export default Movies;