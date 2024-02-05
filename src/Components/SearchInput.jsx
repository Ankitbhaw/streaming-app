/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";
import { HiMicrophone } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { SEARCH_SUGGESTIONS_URL } from "../utils/constants";
import { fetch_videos } from "../utils/searchSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SearchInput({ show, setShow }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchSuggetion, setSearchSuggetion] = useState([]);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      getSearchSuggetion(search);
    }, "150");

    return () => clearTimeout(timeOut);
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    dispatch(fetch_videos(search));
  };
  const getSearchSuggetion = async (search) => {
    const data = await fetch(SEARCH_SUGGESTIONS_URL + search);
    const json = await data.json();
    setSearchSuggetion(json[1]);
  };

  return (
    <>
      <div className="flex w-[600px] h-[40px] justify-center">
        <div className="flex">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={search}
            onKeyDown={() => {
              setShow(true);
            }}
            placeholder="Search"
            className="w-[530px] border border-bordercolor h-full text-[16px] rounded-l-full focus:outline-none pl-10 pr-4 py-3"
          />
          <button
            className="border bg-background-color rounded-r-full text-4xl border-bordercolor py-3 px-8"
            onClick={handleSearch}
          >
            <Link to={"search"}>
              <IoIosSearch />
            </Link>
          </button>
        </div>
        <div className="ml-6">
          <button className="bg-bgcolor rounded-full text-[21px] p-4">
            <HiMicrophone className="bg-bgcolor"/>
          </button>
        </div>
      </div>
      <div className="absolute bg-white rounded-xl shadow w-[26%] z-20">
        {searchSuggetion &&
          show &&
          searchSuggetion.map((searchText, index) => (
            <div
              key={index}
              onClick={() => {
                setSearch(searchText);
                setShow(false);
              }}
              className="px-4 py-4 border-b hover:bgcolor border-bgcolor mx-4 text-[16px] cursor-pointer"
            >
              {searchText}
            </div>
          ))}
      </div>
    </>
  );
}
