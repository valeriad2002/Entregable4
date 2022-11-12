import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import Pherson from './Components/Pherson';
import RegusterPherson from './Components/RegusterPherson';

function App() {
  const [person, setpherson] = useState([]);
  const [selctUser, setselctUser] = useState(null);
  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setpherson(res.data))

  }, [])
  const getuser = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setpherson(res.data))
  }
  const selectUser = (user) => {
    setselctUser(user)

  }
  const delet = (user => setselctUser(null));
  const deletUser = (id) => {
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getuser());
    
  }


  return (
    <div className="App">
      <RegusterPherson getuser={getuser}
        selctUser={selctUser}
        delet={delet} />
      <Pherson person={person} selectUser={selectUser}
        deletUser={deletUser} />


    </div>
  )
}

export default App
