import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pherson from "./Components/Pherson";
import RegusterPherson from "./Components/RegisterPherson";

function App() {
  const [pherson, setpherson] = useState([]);
  const [selctUser, setselctUser] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setpherson(res.data));
  }, []);
  const getuser = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setpherson(res.data));
  };
  const selectUser = (user) => {
    setselctUser(user);
    setShow(true);
  };
  const delet = (user) => setselctUser(null);
  const deletUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getuser());
  };
  // funcion de aparicion de registro
  const showForm = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="nabvar">
          <h1>Users</h1>
          <button onClick={showForm}>
            {" "}
            <b className="mas">+</b>
            <b> New User</b>
          </button>
        </div>
        {show && (
          <RegusterPherson
            getuser={getuser}
            selctUser={selctUser}
            delet={delet}
            showForm={showForm}
          />
        )}
        <Pherson
          pherson={pherson}
          selectUser={selectUser}
          deletUser={deletUser}
        />
      </div>
    </div>
  );
}

export default App;
