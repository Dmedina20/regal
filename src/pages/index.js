import * as React from "react";
import Hero from "../components/Hero";
import "../css/global.css";
import Layout from "../components/layout";

const MainPage = () => {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default MainPage;
