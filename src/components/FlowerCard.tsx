import { FC } from "react";
import Post from "../models/postModel";

interface FlowerProps {
  props: Post;
}

const FlowerCard: FC<FlowerProps> = (props) => {
  const {
    props: { id, name, latin_name, sightings, profile_picture },
  } = props;
  console.log(name);
  return (
    <div key={id} className="group relative">
      <div className="w-full h-96 bg-gray-200 rounded-md overflow-hidden lg:h-96 lg:aspect-none">
        <div
          className="  flex items-center justify-end text-white flex-col absolute w-full h-full bg-cover rounded-md bg-center lg:w-full lg:h-full bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${profile_picture})`,
          }}
        >
          <div className="text-2xl">{name}</div>
          <div className="italic text-sm ">{latin_name}</div>
          <button className="py-2 px-6 text-sm bg-black/60 rounded-full my-6 hover:bg-primary duration-150">
            {sightings} sightings
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
