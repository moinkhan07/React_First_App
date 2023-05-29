import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movie from './movie.json'
import React,{useState} from 'react';

function App() {

  const [num,setNum] = useState(1);

  function inc(){
    setNum(num + 1);
  }
  function dec(){
    num == 0 ? alert("Please Increment!"):setNum(num - 1);
  }

  return (
    <div className="App">
      <h1 className='pj'>Project 1 using useState</h1>
      <h1 className='display'>{num}</h1>
      <button className='btn' onClick={inc}>Increment</button>
      <button className='btn' onClick={dec}>Decrement</button>

      <h1 className='pj'>Project 2 using props</h1>
      <div id='main'>
        {
        movie.map((el,i)=>{
          return(
          <Movie key={i} title={el.Title} img={el.Poster} year={el.Year} runtime={el.Runtime}/>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
