"use client";

import { IoCafeOutline } from "react-icons/io5";
import SimpleWidget from "./SimpleWidget";
import { useAppSelector } from "@store/index";

export default function WidgetsGrid() {
    const {counter} = useAppSelector((state) => state);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        label="Contador"
        title={`${counter.count}`}
        subTitle="Contador de visitas"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        href="/dashboard/contador"
      />
      <SimpleWidget
        label="Noticias"
        title="10"
        subTitle="Noticias nuevas"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        href="/dashboard/noticias"
      />
    </div>
  );
}
