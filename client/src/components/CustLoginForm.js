import React, { useState } from "react";

const CustLoginForm = ({ onLogin }) => {
  // formfield was formerly a div
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/customerlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
      <div>
        {errors.map((err) => (
          <div key={err}>
            <span>!</span>
            <p>{err}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default CustLoginForm;

// css for err div
// const Wrapper = styled.div`
//   color: white;
//   background-color: red;
//   border-radius: 6px;
//   display: flex;
//   padding: 8px;
//   align-items: center;
//   gap: 8px;
//   margin: 8px 0;
// `;

// const Alert = styled.span`
//   background-color: white;
//   height: 30px;
//   width: 30px;
//   border-radius: 50%;
//   font-weight: bold;
//   display: grid;
//   place-content: center;
// `;

// const Message = styled.p`
//   margin: 0;
// `;
