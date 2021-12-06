import React, { useState } from "react";

const VendSignUpForm = ({ onLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [isVendor, setIsVendor] = useState(true);
  const [inputErrors, setInputErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setInputErrors([]);
    setIsLoading(true);
    fetch("/vendorsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
        foodType,
        companyName,
        isVendor,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setInputErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          id="firstName"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <label htmlFor="foodType">Food Type</label>
        <input
          type="text"
          id="foodType"
          autoComplete="off"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          autoComplete="off"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>
      <div>
        {inputErrors.map((err) => (
          <div key={err}>
            <span>!</span>
            <p>{err}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default VendSignUpForm;
