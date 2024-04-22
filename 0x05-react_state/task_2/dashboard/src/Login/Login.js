import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login({ logIn }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    enableSubmit: false,
  });

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      email: value,
      enableSubmit: value !== "" && prevData.password !== "",
    }));
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      password: value,
      enableSubmit: value !== "" && prevData.email !== "",
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginData.enableSubmit) {
      logIn(loginData.email, loginData.password);
    }
  };

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChangeEmail}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChangePassword}
          ></input>
          <input
            className={css(styles.input)}
            type="submit"
            value="OK"
            disabled={!loginData.enableSubmit}
          ></input>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});
