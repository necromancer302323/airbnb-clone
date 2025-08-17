export function RoomHeroSectionImages({ img }: { img: string[] }) {
  return (
    <div className="w-fit  flex flex-row gap-2 mt-5 ">
      <img
        className="rounded-l-2xl h-[35rem]"
        width={560}
        src={
          "https://expressinnindia.com/wp-content/uploads/2024/07/Freesia-God-23.jpg"
        }
      ></img>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            className="h-[17.25rem] w-full "
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*iysbkk*_ga*NDE0OTg2NzI1LjE3NTUzODU5NzA.*_ga_8JE65Q40S6*czE3NTUzODU5NzAkbzEkZzEkdDE3NTUzODU5NzMkajU3JGwwJGgw"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[17.25rem] w-full rounded-r-2xl"
            src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[17.25rem] w-full "
            src="https://hips.hearstapps.com/hmg-prod/images/oakland-california-master-bedroom-1489084768.jpg?crop=0.998xw:0.628xh;0.00160xw,0.246xh"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[17.25rem] w-full rounded-r-2xl"
            src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_294,w_3200,h_1799,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/pride-plaza-hotel-ahmedabad/Deluxe_Room_with_king-size_bed,_seating_area,_and_stylish_lighting_for_ultimate_comfort"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
