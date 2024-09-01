import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24">
      <span className="text-5xl">Hola mundo!!</span>

      <Link href="/about" className="bg-blue-600 p-3 rounded-lg" >About</Link>
    </main>
  );
}
