/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { CgCrowdfire } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiMusicNoteLight, PiFilmSlateBold } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { LiaNewspaper } from "react-icons/lia";
import { RiVideoLine } from "react-icons/ri";
import { GoLightBulb, GoTrophy } from "react-icons/go";
import { TbHanger2 } from "react-icons/tb";
import {
  MdOutlineSubscriptions,
  MdOutlineAccountBox,
  MdHistory,
  MdOutlineWatchLater,
  MdExpandMore,
  MdPodcasts,
} from "react-icons/md";

const List = ({ list }) => {
  return (
    <ul className="px-6 mt-4">
      {list.map((item, index) => (
        <li
          className="hover:bg-bgcolor rounded-md flex gap-9 px-4 py-[8px] cursor-pointer items-center "
          key={index}
        >
          <span className="text-[24px]">{item.icon}</span>
          <span className="text-[14px]">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default function SideBar() {
  const [toggle, setToggle] = useState(true);
  const isOpen = useSelector((store) => store.sideBar);
  useEffect(() => {
    setToggle(isOpen);
  }, [isOpen]);
  if (!toggle) return null;
  return (
    <div className="w-[220px]  bg-white fixed left-0">
      <div className=" border-b border-bcolor pb-4 ">
        <List
          list={[
            { name: "Home", icon: <IoMdHome /> },
            { name: "Shorts", icon: <SiYoutubeshorts /> },
            { name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
          ]}
        />
      </div>
      <div className=" border-b border-bcolor mt-8 pb-4 ">
        <div className="text-[16px] font-700 mx-10 ">You</div>
        <List
          list={[
            { name: "Your channel", icon: <MdOutlineAccountBox /> },
            { name: "History", icon: <MdHistory /> },
            { name: "Your videos", icon: <RiVideoLine /> },
            { name: "Watch later", icon: <MdOutlineWatchLater /> },
            { name: "Show more", icon: <MdExpandMore /> },
          ]}
        />
      </div>
      <div className="mt-8">
        <div className="text-[16px] font-700 mx-10 ">Explore</div>
        <List
          list={[
            { name: "Trending", icon: <CgCrowdfire /> },
            { name: "Shopping", icon: <IoBagHandleOutline /> },
            { name: "Music", icon: <PiMusicNoteLight /> },
            { name: "Movies", icon: <PiFilmSlateBold /> },
            { name: "Live", icon: <CiStreamOn /> },
            { name: "Gaming", icon: <SiYoutubegaming /> },
            { name: "News", icon: <LiaNewspaper /> },
            { name: "Sports", icon: <GoTrophy /> },
            { name: "Learning", icon: <GoLightBulb /> },
            { name: "Fashion & Beauty", icon: <TbHanger2 /> },
            { name: "podcasts", icon: <MdPodcasts /> },
          ]}
        />
      </div>
    </div>
  );
}
