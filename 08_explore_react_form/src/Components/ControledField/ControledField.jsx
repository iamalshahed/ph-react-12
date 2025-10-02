import React, { useState } from "react";

const ControledField = () => {
  const [password, setPassword] = useState("");
  const handleControledField = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
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
