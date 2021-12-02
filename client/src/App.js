import React from 'react';
import Header from './components/Header';
import Saldo from './components/Saldo';
import GanhosDespesas from './components/GanhosDespesas';
import Extrato from './components/Extrato';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Saldo/>
        <GanhosDespesas/>
        <Extrato/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;

