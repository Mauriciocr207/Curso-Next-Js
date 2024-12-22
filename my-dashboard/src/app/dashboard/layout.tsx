import { Sidebar } from "@components/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex overflow-hidden h-full">
        <Sidebar/>

        <div className="w-full p-5 grid text-black overflow-auto">
            {children}
        </div>
      </div>
    </div>
  );
}
