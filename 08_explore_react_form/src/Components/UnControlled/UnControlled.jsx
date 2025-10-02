import React, { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="">
            <input
              type="password"
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

export default UnControlled;
