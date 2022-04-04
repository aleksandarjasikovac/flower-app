import React, { FC } from "react";

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
