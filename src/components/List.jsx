import { useEffect, useState } from "react"

export function List({ selectedUser, onSelect }) {

  const [users, setUsers] = useState([]);
  const [isLoading, changeLoadStatus] = useState(true);

  const getUsers = () => {
    changeLoadStatus(true);

    fetch(import.meta.env.VITE_USERS_URL)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        changeLoadStatus(false);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  let usersList;

  if (!isLoading) {
    usersList = users.map(user => (
      <li 
        key={user.id} 
        className={user.id == selectedUser.id ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
        onClick={() => onSelect(user)}
      >
        {user.name}
      </li>
    ))
  } else {
    usersList = <p>Loading...</p>
  }

  return (
    <ul className="list-group">
      {usersList}
    </ul>
  )
}