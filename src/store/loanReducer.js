const initialState = {
    loan: false
}

const APPLY = 'APPLY'

const loanReducer = (state = initialState, { type }) => {
    switch (type) {
        case APPLY:
            return {
                ...state,
                loan: true
            }
        default:
            return state
    }
}

export default loanReducer