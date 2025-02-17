import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="flex flex-col justify-center items-center h-full pt-20">
        <h1 className="text-4xl font-paprika">Actividad 2</h1>
        <p className="text-lg mt-4">Diego Sabillon A01798446</p>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ">
          <Link href="http://www.github.com/DiegoS2004" target="_blank">Press</Link>
        </button>
      </main>
    </div>
  );
}