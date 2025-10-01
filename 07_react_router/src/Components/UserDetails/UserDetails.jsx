import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  return (
    <div>
      <h1>User Details</h1>
      <div className="">
        <h5>Name: {name}</h5>
        <a href={`https://${website}`}>{website}</a>
      </div>
    </div>
  );
};

export default UserDetails;
