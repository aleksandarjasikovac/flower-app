import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "../hooks/useTypedSelector";
import { postActions } from "../store";
import FlowerCard from "./FlowerCard";

const FlowerList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, []);

  const { data } = useSelector((state: any) => state.posts);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-12 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
          {data &&
            data?.flowers.map((flower: any) => (
              <div key={flower.id}>
                <FlowerCard
                  name={flower.name}
                  id={flower.id}
                  latin_name={flower.latin_name}
                  sightings={flower.sightings}
                  profile_picture={flower.profile_picture}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerList;
