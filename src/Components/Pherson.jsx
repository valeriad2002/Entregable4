import React, { useReducer } from 'react';

const Pherson = ({ person, selectUser, deletUser}) => {
    return (
        <div>
            {person.map(user => (
                <ul key={user.id}>

                    <li>
                        <h3>Nombre del usuario: {user.first_name}</h3>
                        <div><b>Apellido del usuario: </b>{user.last_name} </div>
                        <div><b> Birthay: </b>{user.bhirthay} </div>
                        <div><b>email: </b>{user.email} </div>
                        <div><b>Password: </b>{user.password} </div>
                        <button onClick={()=>selectUser(user)}>select</button>
                        <button onClick={() => deletUser(user. id)}>Delet</button>

                    </li>
                 </ul>
            ))}
        </div>
    ); 
};

export default Pherson;

