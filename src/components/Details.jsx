import { useEffect, useState } from "react";

export function Details({ info }) {
  const [currentUser, changeCurrentUser] = useState({});
  const [isLoading, changeLoadStatus] = useState(false);

  const getUserDetail = () => {
    if (info.id) {
      changeLoadStatus(true);

      fetch(`${import.meta.env.VITE_SINGLE_USER_URL}${info.id}.json`)
      .then(res => res.json())
      .then(data => {
        changeLoadStatus(false);
        changeCurrentUser(data);
      })
    }
  }

  useEffect(() => {
    getUserDetail();
  }, [info.id]);

  if (!isLoading) {
    if (currentUser.id == info.id && info.id) {
      return (
        <div className="card">
          <img src={currentUser.avatar} className="card-img-top" />
          <p className="card-text p-3 mb-0">{currentUser.name}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {currentUser.details.city}</li>
            <li className="list-group-item">Company: {currentUser.details.company}</li>
            <li className="list-group-item">Position: {currentUser.details.position}</li>
          </ul>
        </div>
      )
    }
  } else {
    return <p>Loading...</p>
  }
}