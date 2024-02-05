import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function VideoCard({ videoList }) {
  return (
    videoList && (
      <div className="flex flex-wrap mx-auto">
        {videoList.map(({ snippet, statistics, id }) => (
          <Link
            to={"watch?v=" + id}
            key={id}
            className="mt-5 mb-6 rounded-md  hover:bg-gray-100 w-1/4 cursor-pointer"
          >
            <img
              alt="video"
              className="h-[200px] w-[390px] rounded-2xl px-2"
              src={snippet.thumbnails.medium.url}
            />
            <div className="text-[14px] py-3 px-6">
              <div className="font-medium text-[16px] text-justify">{snippet.title}</div>
              <div className="text-txtcolor">{snippet.channelTitle}</div>
              <div className="text-txtcolor">
                {Math.round(parseInt(statistics.viewCount) / 100000) > 0
                  ? `${Math.round(parseInt(statistics.viewCount) / 100000)}m`
                  : `${Math.round(
                      parseInt(statistics.viewCount) / 1000
                    )}k`}{" "}
                views
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
