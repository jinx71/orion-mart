import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [data, setData] = useState([]);
  const addFriend = () => {
    Axios.post("https://orion-mart-server.herokuapp.com/addfriend", { name: name, age: parseInt(age) })
  }
  useEffect(() => {

    Axios.get('https://orion-mart-server.herokuapp.com/read')
      .then(res => setData(res.data))
  }, [])
  return (
    <div className="App container w-75 mt-5">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Friends</span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => { setName(event.target.value) }} />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Age</span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => { setAge(event.target.value) }} />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={addFriend}

      >Submit</button>
      <div>
        {
          data.map(a => <li>{a.name}</li>)
        }
      </div>
    </div>
  );
}

export default App;
