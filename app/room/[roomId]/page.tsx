import { Review } from "@/app/components/Review";
import { RoomDescription } from "@/app/components/roomDescription";
import { RoomHeroSection } from "@/app/components/roomHeroSection";

export default function Room(){
    return <div className="w-full flex flex-col items-center  mt-10 overflow-scroll">
        <RoomHeroSection name="" />
        <RoomDescription description="" location=""/>
         <img
        width={600}
        src={
          "https://i.pinimg.com/736x/41/95/14/4195148ee2946aa6f1352e0a519eb177.jpg"
        }
      />
        <Review/>
        </div>
}