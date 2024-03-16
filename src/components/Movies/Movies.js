import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies() {
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <section className="movies">
            <main>
                <SearchForm />
                {isLoading ? <Preloader /> : <MoviesCardList />}
            </main>
            <Footer />
        </section>
    );
}

export default Movies;