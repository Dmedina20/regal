import * as React from "react";
import Movies from "../components/MoviePosters";
import "../css/global.css";
import Layout from "../components/layout";

const MainPage = () => {
  return (
    <>
      <Layout>
        <Movies />
      </Layout>
    </>
  );
};

export default MainPage;
