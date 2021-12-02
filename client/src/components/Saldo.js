import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState';
import { numberWithCommas } from '../utils/format'

export const Saldo = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
         <>
            <h4>Seu Saldo</h4>
            <h1>R${numberWithCommas(total)}</h1>
         </>
    )
}

export default Saldo

