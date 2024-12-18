import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const DUMMY_ARRY = [
    {
      id: "u1",
      name: "Shane",
      places: 1,
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
  ];
  return <UsersList items={DUMMY_ARRY} />;
};

export default Users;
