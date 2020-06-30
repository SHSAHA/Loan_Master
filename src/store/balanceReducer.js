const initialState = {
    balance: 0,
    loading: false
}

const DEPOSIT = 'DEPOSIT'
const WITHDRAW = 'WITHDRAW'
const LOADING = 'LOADING'

const balanceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DEPOSIT:
            return {
                ...state,
                balance: state.balance + payload, loading: false
            }
        case WITHDRAW:
            return {
                ...state,
                balance: state.balance - payload, loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default balanceReducer