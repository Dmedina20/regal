import * as React from "react";
import Movies from "../components/MoviePosters";
import "../css/global.css";
import Navi from "../components/Navigation";

const MainPage = () => {
  return (
    <>
      <Navi/>
        <Movies />
     
    </>
  );
};

export default MainPage;
