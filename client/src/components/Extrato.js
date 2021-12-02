import React, {useContext, useEffect} from 'react';
import { GlobalContext } from './context/GlobalState';
import Transaction from './Transaction';

export const Extrato = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);
    
    
    return (
        <>
            <h3>Extrato</h3>
            <ul className="lista">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
                    {transaction}
                />))}
            </ul>
        </>
    )
}

export default Extrato
