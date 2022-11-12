import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const RegusterPherson = ({ getuser, selctUser, delet,showForm }) => {
  const { handleSubmit, register, reset } = useForm();
  useEffect(() => {
    if (selctUser) {
      reset(selctUser);
      //console.log("cambio");
    } else {
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: "",
      });
    }
  }, [selctUser]);
  const submit = (data) => {
    if (selctUser) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${selctUser.id}/`, data)
        .then(() => getuser(), delet())
        .catch((error) => console.log(error.response?.data));
    } else {
      console.log(data);
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(() => getuser())
        .catch((error) => console.log(error.response?.data));
    }
  };

  return (
    <div className="form_container">
      <form className="user_form" onSubmit={handleSubmit(submit)}>
        <div className="closed">
          <button onClick={showForm}>
            <img src="./image/bx-x.svg" alt="closed" />
          </button>
        </div>
        <div className="input_container">
          <label htmlFor="first_name">Name</label>
          <input {...register("first_name")} type="text" id="name" />
        </div>
        <div className="input_container">
          <label htmlFor="last_name">Apellido</label>
          <input {...register("last_name")} type="text" id="last_name" />
        </div>
        <div className="input_container">
          <label htmlFor="email">email</label>
          <input {...register("email")} type="text" id="email" />
        </div>
        <div className="input_container">
          <label htmlFor="password">Pasword</label>
          <input {...register("password")} type="password" id="password" />
        </div>

        <div className="input_container">
          <label htmlFor="birthday">Birthay</label>
          <input {...register("birthday")} type="date" id="birthday" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegusterPherson;
