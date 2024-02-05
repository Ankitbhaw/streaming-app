/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOff } from "../utils/sideBarSlice";
import { useEffect, useState } from "react";
import { VIDEO_URL, VIDEO_DETAILS_URL } from "../utils/constants";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import Comments from "./Comments";
import SuggestionList from "./SuggestionList";
export default function VideoPage() {
  let [searchParams] = useSearchParams();
  const param = searchParams.get("v");
  const [video, setVideo] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleOff());
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(VIDEO_DETAILS_URL + param);
    const json = await data.json();
    setVideo(json.items[0]);
  };

  return (
    video && (
      <div className="grid grid-flow-col grid-cols-12 absolute top-28 text-[17px]">
        <div className="ml-28  my-6 col-span-9">
          <iframe
            className="rounded-2xl"
            width="1280"
            height="700"
            src={VIDEO_URL + param}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="mt-6 ">
            <div className="text-[20px] font-semibold ">
              {video?.snippet?.title}
            </div>
          </div>
          <div className="flex mt-4 gap-3 mr-24 items-center justify-between text-[16px]">
            <div className="font-semibold">
              {video?.snippet?.channelTitle}
              <button className="bg-black text-white ml-6 rounded-3xl text-[14px] py-3 px-5 cursor-pointer ">
                Suscribe
              </button>
            </div>
            <div className="text-3xl flex items-center">
              <button className="py-3 px-4 hover:bg-gray-300 bg-bgcolor rounded-l-full cursor-pointer">
                <AiOutlineLike className="bg-bgcolor" />
              </button>
              <div className="bg-bgcolor py-3">|</div>
              <button className="mr-2 py-3 px-4 bg-bgcolor hover:bg-gray-300 rounded-r-full cursor-pointer">
                <AiOutlineDislike className="bg-bgcolor" />
              </button>
              <button className="mx-4 p-3  bg-bgcolor hover:bg-gray-300 rounded-full font-medium flex cursor-pointer">
                <PiShareFatThin className="bg-bgcolor" />{" "}
                <div className="text-2xl mx-2 bg-bgcolor ">Share</div>
              </button>
              <button className="mx-4 p-3 bg-bgcolor hover:bg-gray-300 rounded-full font-medium flex cursor-pointer">
                <LiaDownloadSolid className="bg-bgcolor" />
                <div className="text-2xl mx-3 bg-bgcolor">Downlaod</div>
              </button>
            </div>
          </div>
          <Comments id={video?.id} />
        </div>
        <SuggestionList categoryId={video.snippet.categoryId} />
      </div>
    )
  );
}
