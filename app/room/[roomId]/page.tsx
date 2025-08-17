import { RoomDescription } from "@/app/components/roomDescription";
import { RoomHeroSection } from "@/app/components/roomHeroSection";

export default function Room(){
    return <div className="w-full flex flex-col items-center  mt-10 overflow-scroll">
        <RoomHeroSection name="" />
        <RoomDescription description="" location=""/>
        </div>
}