import Image from "next/image";
import Link from "next/link";
import { Props } from "next/script";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";


const Hero: FC<Props> = () => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="flex items-center justify-center w-full h-[100vh]">
        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/auth.png"
            alt="Auth Image"
            width={600}
            height={600}
            className="object-contain max-w-[90%] h-auto z-[10] rounded-lg"
          />
        </div>
        <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
          <h2 className="dark:text-white text-[#00000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
            Improve Your Online Learning Experience Instantly
          </h2>
          <br />
          <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
            We have 48k+ Online courses & 500k+ registered students. Find your
            desired courses now.
          </p>
          <br />
          <br />
          <div className="1500px:w-[55%] 1100px:w-[78%] w-[90px] h-[50px] bg-transparent relative">
            <input
              type="search"
              placeholder="Search Courses..."
              className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
            />
            <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
              <BiSearch className="text-white" size={30} />
            </div>
          </div>
          <br />
          <br />
          <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
            <Image
              src="/assets/user1.png" // Corrected user image path
              alt="User 1"
              className="rounded-full"
              width={50}
              height={50}
            />
            <Image
              src="/assets/user2.png"
              alt="User 2"
              className="rounded-full ml-[-20px]"
              width={50}
              height={50}
            />
            <Image
              src="/assets/user3.png"
              alt="User 3"
              className="rounded-full ml-[-20px]"
              width={50}
              height={50}
            />
            <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
              500k People already trusted us.{" "}
              <Link
                href="/courses"
                className="dark:text-[#46e256] text-crimson"
              >
                View Courses
              </Link>{" "}
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Hero;
