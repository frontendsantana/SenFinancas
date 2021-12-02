import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const{addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction ={
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <>
            <h3>Adicionar Nova Transação</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Descreva o valor</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Do que foi esse valor?"/>
                </div>
                <div className="form-control">
                    <label htmlFor="quantia"
                    >Quantia<br/>
                     (-) Negativo = Despesas/ 
                     (+) Positivo = Ganhos</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Coloque a quantia..."/>
                </div>
                <button className="btn">Adicionar Transação</button>
            </form>
        </>
    )
}

export default AddTransaction

