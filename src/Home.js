import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>This is home</h1>
      <h2> users : {users.length}</h2>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
