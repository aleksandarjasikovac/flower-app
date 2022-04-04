import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypedSelector";
import { postActions } from "../store";

import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import FlowerList from "../components/FlowerList";

export const Home: FC = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <FlowerList />
      </Layout>
    </div>
  );
};
