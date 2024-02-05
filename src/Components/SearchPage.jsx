/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toggleOn } from "../utils/sideBarSlice";
import { useDispatch } from "react-redux";

function SearchPage() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const searchedVideos = useSelector((store) => store.search_videos.videos);

  useEffect(() => {
    setVideos(searchedVideos);
    dispatch(toggleOn());
  }, [searchedVideos]);
  if (videos.lenght == 0) return null;
  return (
    <div className="w-[1000px] mx-auto mt-20">
      {videos.map((video) => (
        <Link
          to={
            video.id.videoId
              ? "/watch?v=" + video.id.videoId
              : "/playlist?list=" + video.id.playlistId
          }
          key={video.id.videoId}
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

export default SearchPage;
