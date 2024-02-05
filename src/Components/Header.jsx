/* eslint-disable react-hooks/exhaustive-deps */
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { logOut } from "../utils/loginSlice";

/* eslint-disable react/prop-types */
function Header() {
  const isLogin = useSelector((store) => store.login);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleSideBar());
  };
  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    const handle = () => setShow(false);
    window.addEventListener("click", handle);
    return () => {
      return removeEventListener("click", handle);
    };
  }, []);
  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  return (
    <div className="flex h-[56px] fixed bg-white top-0 px-6 items-center w-full z-10">
      <div className="flex items-center basis-1/4">
        <RxHamburgerMenu
          className="text-6xl p-3 cursor-pointer"
          onClick={() => handleClick()}
        />
        <Link to={"/"}>
          <img src={logo} className="h-8 ml-8" />
        </Link>
      </div>
      <div className="w-full mx-auto  basis-1/2">
        <SearchInput show={show} setShow={setShow} />
      </div>
      {!login ? (
        <Link to={"/"} className="basis-1/8">
          <div className="flex items-center gap-3 text-blue-600 border border-blue-600 p-2 w-38 rounded-full cursor-pointer hover:bg-gray-100 ">
            <IoPersonCircleOutline className="text-4xl" />
            <div className="text-[14px]">Sign in</div>
          </div>
        </Link>
      ) : (
        <div className="basis-1/8">
          <IoPersonCircleOutline
            className="text-5xl cursor-pointer px-3"
            onClick={() => handleLogOut()}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
