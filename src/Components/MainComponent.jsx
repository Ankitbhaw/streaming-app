/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { toggleOn } from "../utils/sideBarSlice";

const List = ({ list }) => {
  return (
    <ul className="mx-auto flex px-2">
      {list.map((item, index) => (
        <li
          className="bg-bgcolor text-[14px] px-4 py-2 mx-3 rounded-lg font-[500]  cursor-pointer"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
export default function MainComponent() {
  const dispatch = useDispatch();
  const [videoList, setVideoList] = useState();
  useEffect(() => {
    dispatch(toggleOn());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideoList(json.items);
  };
  return (
    <div className="w-[1700px] ml-[250px]">
      <div className="py-4 fixed  bg-white w-full">
        <List
          list={[
            "All",
            "Mixes",
            "Music",
            "Bollywood Music",
            "Akshay Kumar",
            "Live",
            "Mithoon",
            "HTML",
            "CSS",
            "Akshay Kumar",
            "Live",
            "Mithoon",
            "HTML",
            "CSS",
          ]}
        />
      </div>
      <div className="mt-[68px] ml-[12px] mr-[16px]">
        <VideoCard videoList={videoList} />
      </div>
    </div>
  );
}
