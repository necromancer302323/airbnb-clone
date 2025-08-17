import { BuyBox } from "./buyBox";
import { OwnersDescription } from "./ownerDescription";
import { RoomRating } from "./roomRating";

export function  RoomDescription({location,description}:{location:string,description:string}){
    return <div className="mt-5 ">
        <div className="flex flex-row justify-between">
        <div className="w-[50rem]  flex flex-col">
           <text className="text-2xl font-semibold">Entire rental unit in Greater Noida, India</text>
            <text className="text-sm font-medium">2 guests · 1 bedroom · 1 bed · 1 bathroom</text>
             <RoomRating/>
             <OwnersDescription/>
        </div>
        <BuyBox price=""/>
        </div>
       
    </div>
}