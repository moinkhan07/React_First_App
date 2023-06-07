import './App.css';
import Movie from './components/Movie';
import React,{useState,useEffect} from 'react';

function App() {

  let [data,setData] = useState([]);

  useEffect(() => {
    let fetchData = async ()=>{
      let res = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
      let movie = await res.json();
      setData(movie);
    }
    fetchData();
  })
  

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
        data.map((el,i)=>{
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
