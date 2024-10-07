import { CartCounter } from "@/src/components/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Counter Page",
    description: "Counter Page",
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-2xl">Hello Counter Page</span>
      <CartCounter/>
    </div>
  );
}
