import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as withdrawAction from './../action/withdrawAction'



const Withdraw = () => {
    const balance = useSelector(state => state.balance.balance)
    const loan = useSelector(state => state.loan.loan)
    const loading = useSelector(state => state.balance.loading)
    const dispatch = useDispatch()

    const onWithdrawHandle = () => {
        dispatch(withdrawAction.withdrawAsync())
    }
    return (
        <div>
            <h1>{loan ? "Loan Applied" : "Apply for Loan"}</h1>
            {loading ? <h1>Loading...</h1> : <h1>Balance: {balance}</h1>}
            <button onClick={onWithdrawHandle} >Withdraw</button>
        </div>
    )
}

export default Withdraw
