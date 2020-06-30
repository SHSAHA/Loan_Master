import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const balance = useSelector(state => state.balance.balance)
    const loan = useSelector(state => state.loan.loan)
    const dispatch = useDispatch()

    const onLoanHandle = () => {
        dispatch({ type: 'APPLY' })
    }
    return (
        <div>
            <h1>Balance: {balance}</h1>
            <button onClick={onLoanHandle} disabled={loan ? true : false} className="button-style" >{loan ? "Loan Applied" : "Apply for Loan"}</button>
            <h1>{loan ? "Loan Applied" : "Apply for Loan"}</h1>
        </div>
    )
}

export default Home
