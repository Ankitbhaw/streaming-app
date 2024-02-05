/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toggleOn } from "../utils/sideBarSlice";
import { useDispatch } from "react-redux";
import { PLAYLIST_URL } from "../utils/constants";

function PlayList() {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const param = searchParams.get("list");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getPlayList();
    dispatch(toggleOn());
  }, []);
  const getPlayList = async () => {
    const data = await fetch(PLAYLIST_URL + param);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.lenght == 0) return null;
  return (
    <div className="w-[1000px] mx-auto mt-20">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.snippet.resourceId.videoId}
          key={video.snippet.resourceId.videoId}
          className="flex my-6 ml-32"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="h-[200px] w-[350px] rounded-2xl"
          />
          <div className="mx-6">
            <h1 className="text-3xl ">
              {video.snippet.title}
            </h1>
            <h1 className="text-[14px] mt-3 text-txtcolor">
              {video.snippet.channelTitle}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PlayList;
