/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { SUGGESTIONLIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function SuggestionList({ categoryId }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    if (categoryId) {
      const data = await fetch(SUGGESTIONLIST_URL + categoryId);
      const json = await data.json();
      console.log(categoryId)
      setVideos(json.items);
    }
  };
  if (!categoryId) return null;
  return (
    <div className="col-span-3 -ml-6 mr-28">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          key={video?.id}
          className="flex my-7 gap-6 cursor-pointer"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="image"
            className="max-w-64 rounded-2xl"
          />
          <div className="text-xl mt-4">
            <div className="font-medium text-[14px] text-justify">{video.snippet.title}</div>
            <div className="mt-2">{video.snippet.channelTitle}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
