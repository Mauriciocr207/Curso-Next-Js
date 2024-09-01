

import { Navbar } from "@/components";
import { Suspense } from "react";
import Loading from "./loading";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <Suspense fallback={<Loading/>} >
          <span>Hello Root Layout General</span>
          {children}
        </Suspense>
      </main>
    </>
  );
}
