import Image from "next/image";
import Link from "next/link";

export default function Marketplace() {
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
          <Link href="/" className="text-sm sm:text-base hover:underline">
            Home
          </Link>
          <Link href="/page1" className="text-sm sm:text-base hover:underline">
            Pag1
          </Link>
          <Link href="/pag2" className="text-sm sm:text-base hover:underline">
            Pag2
          </Link>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center h-full pt-20">
        <h1 className="text-4xl font-paprika">Guitar Marketplace</h1>
        <div className="flex flex-col items-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-8">
            Add to Cart
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/jaguar.png"
                alt="Fender Jaguar"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Link href="/https://www.sweetwater.com/store/detail/JagKCNOS--fender-kurt-cobain-jaguar-nos-3-tone-sunburst-with-rosewood-fingerboard" className="mt-4 text-lg hover:underline">
                Fender Jaguar - $1500
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/start.png"
                alt="Fender Mustang"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Link href="/fender-stratocaster" className="mt-4 text-lg hover:underline">
                Fender Stratocaster - $2200
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/epiphone.png"
                alt="Epiphone"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <Link href="/epiphone" className="mt-4 text-lg hover:underline">
                Epiphone - $899
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}