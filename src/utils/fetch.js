export const moviesFetch = () => {
    return fetch('https://movies-explorer-backend.onrender.com/signin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'qwertyqwerty@mail.ru', password: 'qwerty' }),
    })
    .then((res) => {
        if (res.status >= 400) {
            throw new Error()
        }
    })
    .catch(() => console.log('have a nice day :)'))
}

export const mestoFetch = () => {
    return fetch('https://mesto-backend-tet4.onrender.com/signin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'qwertyqwerty@mail.ru', password: 'qwerty' }),
    })
    .then((res) => {
        if (res.status >= 400) {
            throw new Error()
        }
    })
    .catch(() => console.log('have a nice day :)'))
}
