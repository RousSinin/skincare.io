import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const footer = [
    {
      name: "My ACCOUNT",
      text1: "About Us",
      text2: "Feedback",
      text3: "Membership",
    },
    {
      name: "HELP & SUPPORT",
      text1: "Delivery Info",
      text2: "Return",
      text3: "Refund",
      text4: "      How to order",
    },
    {
      name: "CUSTOMER CARE",
      text1: "Contact Us",
      text2: "Payment",
      text3: "Coupon",
    },
    {
      name: "FIND US ON",
      icon: (
        <div className="flex gap-[15px]">
          <AiOutlineInstagram />
          <FaFacebookF />
          <FaTelegramPlane />
          <FaTiktok />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-[50vh] mt-[-100px]">
      <ul className="lg:flex grid grid-cols-2 gap-[100px]">
        {footer.map((res, index) => {
          return (
            <div>
              <li className="font-bold ml-[40px]">{res.name}</li>
              <h1 className="ml-[40px]">{res.text1}</h1>
              <h1 className="ml-[40px]">{res.text2}</h1>
              <h1 className="ml-[40px]">{res.text3}</h1>
              <h1 className="ml-[40px]">{res.text4}</h1>
              <span className="text-2xl gap-5 ml-10 items-center flex justify-center">
                {res.icon}
              </span>
            </div>
          );
        })}
              <div className="lg:ml-0 ml-10 h-[25vh]">
        <h1 className="font-bold">PAYMENT METHOD</h1>
        <div className="flex lg:gap-5 gap-3 mt-5">
          <img
            className="object-cover  w-[50px] h-[50px] rounded-[12px]"
            src="https://i.pinimg.com/564x/39/b8/cf/39b8cf47e80b872c3094a5e4d8292b53.jpg"
            alt=""
          />
          <img
            className="object-cover  w-[55px] h-[55px] "
            src="https://www.acledabank.com.kh/kh/assets/download_material/download-logo-icon.png"
            alt=""
          />

          <img
            className="object-cover  w-[50px] h-[50px] rounded-[5px]"
            src="https://i.pinimg.com/736x/3d/5c/17/3d5c17068588e241f5a3877f79064fd7.jpg"
            alt=""
          />

          <img
            className="object-cover  w-[50px] h-[50px] rounded-[12px]"
            src="https://i.pinimg.com/564x/9f/a7/c3/9fa7c33a0cd4d96bfb30b7cf5fd6d3ab.jpg"
            alt=""
          />

          <img
            className="object-cover  w-[48px] h-[48px] rounded-[12px]"
            src="https://i.pinimg.com/564x/b8/e3/5f/b8e35fb0f290ebb2d537b402a96ed5c6.jpg"
            alt=""
          />
        </div>
      </div>
      </ul>

      <div className="w-full h-[25vh] lg:gap-10 items-center lg:flex grid grid-cols-1 max-w-[1400px] mx-auto">   
             <img
            className=" w-[150px] h-[150px] rounded-full lg:mx-0 mx-auto mt-[30px]"
            src="https://i.pinimg.com/564x/7f/84/fd/7f84fddbb911f706711b33a27b783b4a.jpg"
            alt=""
          />
        <div className="w-full lg:flex  grid grid-cols-2 ml-5">
          <div className="w-[100%] mt-6">
            <h1 className="font-bold">Credit</h1>
            <h2 className="font-bold">Develop by</h2>
            <p className="text-[gray] font-bold">
              Ket Kakvey <br />
              Chea Bormey <br />
              Ven Dalin <br />
              Rous Sinin
            </p>
          </div>
          <div className="w-[100%] mt-12">
            <h1 className="font-bold">UI/UX Design by</h1>
            <p className="text-[gray] font-bold">Hing Chantreanila</p>
          </div>
        </div>
        <div className="flex flex-col 
        lg:items-center lg:text-center text-start ml-[20px] mt-[5px] lg:mt-0">
          <h1 className="font-bold">Location</h1>
          <p className="text-[gray] font-bold">Battambang</p>
        </div>
        <div className="w-[100%] flex flex-col items-center lg:mt-0 mt-[-25px] lg:ml-0 ml-[55px]">
          <h1 className="text-[gray] font-bold">
            Copyright@2023 All right serve
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
