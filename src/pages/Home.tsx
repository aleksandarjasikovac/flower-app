import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypedSelector";
import { postActions } from "../store";

import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";

export const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, [dispatch]);

  const { data } = useSelector((state: any) => state.posts);
  console.log(data);

  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};
