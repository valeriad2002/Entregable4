import React from "react";

const Pherson = ({ pherson, selectUser, deletUser}) => {


  return (
    <div className="card_container">
      {pherson.map((user) => (
        <div className="card" key={user.id}>
          <img src="./image/user.svg" alt="user" className="user_icon" />
          <h3>
            {" "}
            <b> Name:</b> {user.first_name}
          </h3>
          <div>
            <h3>
              <b> Last Name:</b>
              {user.last_name}{" "}
            </h3>
          </div>
          <div>
            <h3>
              <b>Birthay:</b>
              {user.birthday}{" "}
            </h3>
          </div>
          <div>
            <h3>
              <b>email:</b>
              {user.email}{" "}
            </h3>
          </div>
          <div>
            <h3>
              <b>Password:</b>
              {user.password}{" "}
            </h3>
          </div>
          <div className="btn_container">
            <button onClick={()=>{selectUser(user)}} className="btn_edit">
              <img src="./image/bxs-edit-alt.svg" alt="edit" />
            </button>
            <button onClick={() => deletUser(user.id)} className="btn_delte">
              <img src="./image/bx-trash.svg" alt="delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pherson;