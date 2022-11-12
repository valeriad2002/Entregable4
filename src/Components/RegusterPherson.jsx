import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RegusterPherson = ({ getuser, selctUser, delet }) => {
    const { handleSubmit, register, reset } = useForm();
    useEffect(() => {
        if (selctUser) {
            reset(selctUser)
            //console.log("cambio");
        } else {
            reset({

                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""
            })
        }
    }, [selctUser])
    const submit = (data) => {
        if (selctUser) {
            axios.put(`https://users-crud1.herokuapp.com/users/${selctUser.id}/`, data)
                .then(() => getuser(),
                    delet())
                .catch(error => console.log(error.response?.data))
        } else {
            console.log(data);
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                .then(() => getuser())
                .catch(error => console.log(error.response?.data))
        }

    }

    return (
        <form className='user-form' onSubmit={handleSubmit(submit)}>


            <div className="input-conatainer">
                <label htmlFor="email">email</label>
                <input {...register("email")} type="text" id="email" />
            </div>
            <div className="input-conatainer">
                <label htmlFor="password">Pasword</label>
                <input {...register("password")} type="text" id="password" />
            </div>

            <div className='input-container'>
                <label htmlFor="first_name">Name</label>
                <input {...register("first_name")} type="text" id="name" />

            </div>
            <div className="input-conatainer">
                <label htmlFor="last_name">Apellido</label>
                <input {...register("last_name")} type="text" id="last_name" />
            </div>
            <div className="input-conatainer">
                <label htmlFor="birthday">Birthay</label>
                <input {...register("birthday")} type="date" id="birthday" />
            </div>
            <button type='submit'>Submit</button>

        </form>
    );
};

export default RegusterPherson;