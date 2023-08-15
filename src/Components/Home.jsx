import React, { useState } from "react";
import {FaUserCircle} from "react-icons/fa"
import {RiCustomerService2Fill} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"
import {BsTranslate} from "react-icons/bs"
import {AiFillExclamationCircle} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import {BsThreeDots} from "react-icons/bs"

const Home = () => {
  const [menu, setmenu] = useState(false);
  const flex = ()=>{
    setmenu(!menu);

  }
  const category = [
    {
      img: "https://i.pinimg.com/564x/47/cf/ea/47cfead737c05129d7e092ede7e8b4fe.jpg",
      title: "New Arrival",
    },
    {
      img: "https://i.pinimg.com/564x/f2/61/e4/f261e44960be6b92fde3aa11ba65564c.jpg",
      title: "Best Seller",
    },
    {
      img: "https://i.pinimg.com/564x/ec/68/89/ec68890ea87f542488ab72f7dbcf7818.jpg",
      title: "Discount",
    },
    {
      img: "https://i.pinimg.com/564x/44/13/7f/44137f90f2d3ee808998185238b261dd.jpg",
      title: "Skincare",
    },
    {
      img: "https://i.pinimg.com/564x/ea/e5/b4/eae5b4220cad5030e6d9794f465a413b.jpg",
      title: "Body Lotion",
    },
    {
      img: "https://i.pinimg.com/564x/bb/70/b2/bb70b239feb6688b6de29a10ea421999.jpg",
      title: "Cosmectic",
    },
  ];
  return (
    <div className="w-[100%]">
     <div className="w-full lg:flex block">
      <div className="lg:w-[50%] w-full lg:h-[300px] h-[200px] xl:w-[50%] xl:h-[300px] md:w-[100%] md:h-[300px] bg-slate-600">
        <div className="w-full h-[100%] ">
          <img
           className="w-full h-[100%] object-cover"
           src="https://i.pinimg.com/564x/29/7e/2f/297e2f2488ad61d0362dc9074df65dc7.jpg" alt="" />
        </div>
      </div>
      <div className="lg:w-[50%] w-full lg:h-[300px] h-[100px] xl:w-[50%] xl:h-[300px] md:w-[100%] md:h-[300px] bg-[#8e5346] rounded-br-2xl rounded-bl-2xl lg:rounded-br-none lg:rounded-bl-none">
       <div className="">
       <h1 className="text-center lg:py-[50px] xl:py-[50px] md:py-[50px] py-6 font-bold lg:text-[32px] xl:text-[32px] md:text-[32px] text-white">Let's Get Ready <br />
            With Tynin
        </h1>
          <button className="lg:w-[150px] lg:h-[40px] lg:block hidden  bg-black text-white rounded-full items-center text-center ml-[40%]">About Us</button>
       </div>
      </div>

     </div>
      
      <div>
        <h1 className="py-3 lg:ml-20 ml-10 text-[gray] font-bold">Categories</h1>
        <div
          className="
        lg:flex grid grid-cols-3 items-center gap-5 lg:ml-20 ml-10"
        >
          {category.map((cate, index) => {
            return (
              <div className="w-[75px] h-[75px]  rounded-full">
                <img
                  className="object-cover  w-[90%] h-[90%] rounded-full"
                  src={cate.img}
                  alt=""
                />
                <h1 className="text-center font-semibold">{cate.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
