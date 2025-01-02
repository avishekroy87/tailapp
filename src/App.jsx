import './App.css'
import {useRef, useState} from 'react';
import Loadtest from './components/Loadtest';
import BookList from './components/BookList';
import Consumerlist from './components/Consumerlist';



function App() {
  const[colcode, setColcode] = useState('');
  const [show, setShow] = useState(false);
  const pwdVal = useRef('');


  const pwdHandler = () => {
      console.log(pwdVal.current.value);
      if(pwdVal.current.value !== '') {
          setShow(!show);
      }
  }
  return (
    <div className={colcode}>
      <Loadtest bckgrnd={setColcode}/>
      <BookList />
      <Consumerlist />

        <input type={show ? 'text':'password'} ref={pwdVal}  />
        <i onClick={pwdHandler}>Show</i> 
    </div>
  )
}

export default App
