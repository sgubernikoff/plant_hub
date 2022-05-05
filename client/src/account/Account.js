import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function Account({ user, onLogin }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gardenName, setGardenName] = useState("");
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  function logOut() {
    fetch("/sessions/0", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
        history.push("/");
      }
    });
  }

  const [edit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!edit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        name: displayName,
        gardenName: gardenName,
        gardenId: user.gardens[0].id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          onLogin(data.user);
          setDisplayName("");
          setGardenName("");
          setUsername("");
        });
      } else
        r.json().then((data) => {
          setErrors(data.errors);
        });
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
        <button className="account-button" onClick={toggleEdit}>
          Edit Account
        </button>
        <button className="account-button" onClick={deleteAccount}>
          Delete Account
        </button>
      </div>
      {edit ? (
        <form
          className="form-account"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "33%",
            margin: "auto",
          }}
        >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <label htmlFor="displayName">Change Name</label>
          <input
            type="displayName"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="username">Change Username</label>
          <input
            type="username"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Change Garden Name</label>
          <input
            type="gardenName"
            id="gardenName"
            autoComplete="off"
            value={gardenName}
            onChange={(e) => setGardenName(e.target.value)}
          />
          <button
            className="submit-account-form"
            type="submit"
            style={{ marginTop: 10, fontSize: "1.13vw" }}
          >
            Save Changes
          </button>
          {errors.map((err) => (
            <h3
              key={err}
              style={{
                display: "block",
                margin: "auto",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {err}
            </h3>
          ))}
        </form>
      ) : (
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
      )}
    </div>
  );
}

export default Account;
