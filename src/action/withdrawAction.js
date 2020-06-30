export function loading() {
    return {
        type: 'LOADING'
    }
}

export function withdraw() {
    return {
        type: 'WITHDRAW', payload: 5
    }
}

export function withdrawAsync() {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => { dispatch(withdraw()) }, 5000)
    }
}