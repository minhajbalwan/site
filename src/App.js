import './App.css';
import JSONDATA from './Data.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="search" placeholder="Search Products" onChange={event => {setSearchTerm(event.target.value)}} />
      <br />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.info.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className="details">
          <div className="big-img">
            <img src={val.image}/>
          </div>
          <div className="box">
            <div className="row">
              <p>{val.info}</p>
            </div>
            <h2>{val.title}</h2>
            <h4>- {val.color}</h4>
            <div className="button">
            <a href={val.link} className="cart">Buy from amazon</a>
            </div>
          </div>
        </div>
      })}
    </div>
  );
}

export default App;