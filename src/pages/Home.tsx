import React from "react";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import SignUp from "../components/SignUp";

export const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <SignUp />
      </Layout>
    </div>
  );
};
