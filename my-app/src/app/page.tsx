import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="w-full flex justify-between items-center p-4 bg-gray-200 text-black">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/IMG_2914.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <nav className="flex gap-4">
          <Link href="/pag1" className="text-sm sm:text-base hover:underline">
            Home
          </Link>
          <Link href="/" className="text-sm sm:text-base hover:underline">
            Pag1
          </Link>
          <Link href="/pag2" className="text-sm sm:text-base hover:underline">
            Pag2
          </Link>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center h-full pt-20">
        <h1 className="text-4xl font-paprika">Actividad 2</h1>
        <p className="text-lg mt-4">Diego Sabillon A01798446</p>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ">
          <Link href="http://www.github.com/DiegoS2004">Press</Link>
        </button>
      </main>
    </div>
  );
}