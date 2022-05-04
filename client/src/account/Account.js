import React from "react";
import { useHistory } from "react-router-dom";

function Account({ user, onLogin }) {
  let history = useHistory();

  function logOut() {
    fetch("/sessions/0", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
        history.push("/");
      }
    });
  }

  console.log(user);

  function deleteAccount() {
    fetch(`users/${user.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
        history.push("/");
      }
    });
  }
  // console.log(user);
  // console.log(user.items[0]);
  if (!user) return null;
  function home() {
    <a href="/"></a>;
  }
  console.log(user);
  return (
    <div className="logger">
      <h2 className="account">WELCOME, {user.username.toUpperCase()}!</h2>
      <p className="planny">Plan the garden of your dreams TODAY!</p>
      <div className="accounto">
        <button className="account-button" onClick={logOut}>
          Log Out
        </button>
        <button className="account-button">Edit Account</button>
        <button className="account-button" onClick={deleteAccount}>
          Delete Account
        </button>
      </div>
      <div className="container">
        <div className="card card0">
          <div className="border">
            <a href="/" className="white-leaf">
              {user.username}
            </a>
            <div className="icons">
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
