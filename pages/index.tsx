import Image from "next/image";
import { Inter } from "next/font/google";
import CrossIcon from "@/components/icons/crossicon";
import StarRating from "@/components/core/star";
import Intrest from "@/components/core/intrest";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white  ${inter.className}`}
    >
      <div className=" h-full w-full p-3 font-[Merriweather] ">
        <div className=" -ml-2">
        {/* <CrossIcon h={45} w={45} c="black"/> */}
        </div>
        <p className=" text-[30px] font-semibold">Leave a Review</p>
        <div className=" mt-7 flex flex-col gap-2">
          <p className=" text-[22px] font-semibold">Safety</p>
          <p className=" text-[14px] text-gray-400">How many stars do you want to give?</p>
          <div><StarRating totalStars={5}/></div>
        </div>
        <div className=" mt-7 flex flex-col gap-2">
          <p className=" text-[22px] font-semibold">Communication</p>
          <p className=" text-[14px] text-gray-400">How many stars do you want to give?</p>
          <div><StarRating totalStars={5}/></div>
        </div>
        <div className=" mt-7 flex flex-col gap-2">
          <p className=" text-[22px] font-semibold">Would you reccomend Trausti?</p>
          <p className=" text-[14px] text-gray-400">Your review  is helping us?</p>
          <div>
            <Intrest/>
          </div>
          {/* <div><StarRating totalStars={5}/></div> */}
        </div>
        </div> 



   </main>
  );
}
