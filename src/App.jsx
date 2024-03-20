import Loadtest from './components/Loadtest';
import './App.css'
import { useState } from 'react';

function App() {
  const[colcode, setColcode] = useState('');

  return (
    <div className={colcode}><Loadtest bckgrnd={setColcode}/></div>
  )
}

export default App
