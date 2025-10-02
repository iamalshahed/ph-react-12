import React, { useState } from "react";

const ControledField = () => {
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const handleControledField = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    password.length < 6
      ? setPassErr("Password must be 6 character or longer")
      : setPassErr("");
  };

  return (
    <div>
      <form onSubmit={handleControledField}>
        <div className="">
          <div className="">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              defaultValue={password}
              onChange={handlePasswordOnChange}
              name="password"
              id="password"
              placeholder="password"
              required
            />
            <p style={{ color: "red" }}>
              <small>{passErr}</small>
            </p>
          </div>
        </div>
        <div className="">
          <input type="submit" value="Continue" />
        </div>
      </form>
    </div>
  );
};

export default ControledField;
