class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
}

const apiMovies = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'content-type': 'application/json'
    }
});

export default apiMovies;