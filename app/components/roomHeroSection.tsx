import { Headline } from "./Headline";
import { RoomHeroSectionImages } from "./roomHeroSectionImages";

export function RoomHeroSection({ name }: { name: string }) {
  return (
    <div className="w-[70rem]">
      <Headline/>
      <RoomHeroSectionImages img={[""]}/>
    </div>
  );
}
