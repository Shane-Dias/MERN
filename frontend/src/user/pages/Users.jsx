import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const DUMMY_ARRY = [
    {
      id: "u1",
      name: "Shane",
      places: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
  ];
  return <UsersList items={DUMMY_ARRY} />;
};

export default Users;
