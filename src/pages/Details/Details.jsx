import React, { useEffect, useState } from "react";
import UserDetails from "../../component/UserDetails/UserDetails.jsx";
import { useParams } from "react-router-dom";
import Loader from "../../component/Loader/Loader.jsx";

function Details() {
  const [userDetail, setUserDetail] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserDetail(data);
      });
  }, []);

  if (userDetail) {
    return <UserDetails userDetail={userDetail} />;
  } else {
    return <Loader />;
  }
}

export default Details;
