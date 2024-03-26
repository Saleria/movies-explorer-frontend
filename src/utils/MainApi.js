class MainApi {
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

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this._checkResponse)
    }

    changeUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(this._checkResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this._checkResponse)
    }

    changeLikeState(_id, isLiked) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    url: 'https://api.movie.saleria.nomoredomainswork.ru',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'content-type': 'application/json'
    }
});

export default mainApi;