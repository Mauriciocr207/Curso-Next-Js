import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
    { path: "/dashboard/main", icon: <IoBrowsersOutline/>, title: "Dashboard", subTitle: "Visualización" },
    { path: "/dashboard/counter", icon: <IoCalculator/>, title: "Counter", subTitle: "Contador Client Side" },
    { path: "/dashboard/pokemons", icon: <IoFootball/>, title: "Pokemons", subTitle: "Static Generation" },
    { path: "/dashboard/favorites", icon: <IoHeartOutline/>, title: "Favoritos", subTitle: "Static Generation" },
]

export default function Sidebar() {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen text-slate-300 min-w-80 w-80 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex gap-2 items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>React</span>
          <span className="text-blue-500">Dashboard</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="Mauricio Carrillo"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Mauricio Carrillo
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map(item => <SidebarMenuItem key={item.path} {...item} />)}
      </div>
    </div>
  );
}
