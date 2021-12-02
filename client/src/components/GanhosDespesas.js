import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalState';
import { numberWithCommas } from '../utils/format'



export const GanhosDespesas = () => {

    const {transactions}= useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const ganhos = amounts
     .filter(item => item > 0)
     .reduce((acc, item) => (acc += item), 0)
     .toFixed(2)
     

    const despesas = (
        amounts.filter(item => item <0).reduce((acc, item) => (acc += item), 0) * 
        -1
    ).toFixed(2);


    

    return (
        <div className="ganhos-despesas-container">
          <div>
              <h4>Ganhos</h4>
    <p className="money plus">R${numberWithCommas(ganhos)}</p>
          </div>
          <div>
              <h4>Despesas</h4>
    <p className="money minus">R${numberWithCommas(despesas)}</p>
         </div>
            
        </div>
    )
}

export default GanhosDespesas

