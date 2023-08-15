import React from "react";

const Navbar = () => {
  const menu = [
    { name: "Home" },
    { name: "About us" },
    { name: "Products" },
    { name: "Contact us" },
  ];
  return (
    <div className="h-[60px] w-[100%] lg:bg-[white]  shadow-xl flex gap-2 items-center justify-between text-center">
      <div className="lg:ml-[30px] ml-2">
      <img
            className="lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] xl:h-[40px] xl:w-[40px] rounded-full m-auto border-2 border-slate-400"
            src="https://i.pinimg.com/564x/7f/84/fd/7f84fddbb911f706711b33a27b783b4a.jpg"
            alt=""
          />
      </div>
      <ul className="lg:flex md:flex hidden gap-[50px]">
        {menu.map((res, index) => {
          return <li className="">{res.name}</li>;
        })}
      </ul>
      <div className="flex ">
        <div className="flex mr-[20px] items-center">
          <input
            placeholder="  Search here"
            type="text"
            className="border-[2px] py-[2px] border-black rounded-[10px] placeholder:text-black outline-none"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-[-30px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div className="flex gap-[20px] mr-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
