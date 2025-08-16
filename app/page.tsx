import { BrowsingSection } from "./components/browsingsection";
import { Topbar } from "./components/topbar";

export default function Home() {
  return (
    <div className="w-full" >
        <Topbar/>
        <div className="flex justify-center">
        <BrowsingSection/>
        </div>
    </div>
  );
}
