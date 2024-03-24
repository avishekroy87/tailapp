import './App.css'
import { useState } from 'react';
import Loadtest from './components/Loadtest';
import BookList from './components/BookList';
import Consumerlist from './components/Consumerlist';


function App() {
  const[colcode, setColcode] = useState('');

  return (
    <div className={colcode}>
      <Loadtest bckgrnd={setColcode}/>
      <BookList />
      <Consumerlist />
    </div>
  )
}

export default App
