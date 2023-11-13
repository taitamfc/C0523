import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FETCH_USER,DELETE_USER } from "../redux/action";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  const getUsers = () => {
    dispatch({
        type: FETCH_USER,
        payload: ''
    });
  }

  const deleteUser = ( id ) => {
    dispatch({
        type: DELETE_USER,
        payload: id
    });
  }

  return (
    <div>
        <button onClick={getUsers}> Get Users </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td> <button onClick={ () => deleteUser(user.id) } >Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;