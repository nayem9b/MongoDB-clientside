import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  console.log(displayUsers);
  return (
    <div>
      <h1>This is home</h1>
      <h2> users : {displayUsers.length}</h2>
      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}
            <Link to={`/update/${user._id}`}>
              <button>update</button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
