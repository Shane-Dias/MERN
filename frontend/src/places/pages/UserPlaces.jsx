import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "u1",
      imageUrl:
        "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      title: "The greates place of all time",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati Lorem ipsum dolor sit amet consectetur adipisicing elit.a, suscipit recusandae itaque exercitationem excepturi totam a! recusandae itaque exercitationem excepturi totam a!",
      address: " Eos obcaecati molestias eaque doloremque repellat! Molliti",
      creator: "u1",
      location: {
        lat: 40.18722,
        lng: -39.139872,
      },
    },
    {
      id: "u2",
      imageUrl:
        "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      title: "The greates place of all time",
      decription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati Lorem ipsum dolor sit amet consectetur adipisicing elit.a, suscipit recusandae itaque exercitationem excepturi totam a! recusandae itaque exercitationem excepturi totam a!",
      address: " Eos obcaecati molestias eaque doloremque repellat! Molliti",
      creator: "u2",
      location: {
        lat: 40.18722,
        lng: -39.139872,
      },
    },
  ];
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((places) => {
    return places.creator === userId;
  });
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
