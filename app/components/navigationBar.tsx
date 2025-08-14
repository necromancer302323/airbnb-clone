export function NavigationBar() {
  return (
    <div className="flex flex-row gap-3 pl-20 ">
      <NavigationCard
        img="https://png.pngtree.com/png-vector/20241107/ourmid/pngtree-house-logo-png-image_14307350.png"
        name="Homes"
        height={100}
        width={60}
      ></NavigationCard>
      <NavigationCard
        img="https://png.pngtree.com/png-vector/20241107/ourmid/pngtree-house-logo-png-image_14307350.png"
        name="Experinces"
        height={100}
        width={60}
      ></NavigationCard>
      <NavigationCard
        img="https://png.pngtree.com/png-vector/20241107/ourmid/pngtree-house-logo-png-image_14307350.png"
        name="Services"
        height={100}
        width={60}
      ></NavigationCard>
    </div>
  );
}

function NavigationCard({
  img,
  name,
  height,
  width,
}: {
  img: string;
  name: string;
  height: number;
  width: number;
}) {
  return (
    <div className=" flex flex-row text-center gap-2 hover: cursor-pointer ">
      <div className="hover:border-b-2 hover:rounded-b-xsm h-17 pt-4 ">
        <img className="" width={width} height={height} src={img}></img>
      </div>
      <div className="mt-8 hover:text-slate-600">{name}</div>
    </div>
  );
}
