import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './/store/index'

function App() {
 const counter = useSelector((state)=>state.counter);
   const dispatch= useDispatch();
  const increment =()=>{
      dispatch(actions.increment());
   }
   const decrement =()=>{
       dispatch(actions.decrement());
   }
   const addby =()=>{
      dispatch(actions.addby(10));
  }
  return (
  <div>
       <h1> Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>ADD</button> 
  </div>
    
  );
}

export default App;

