import Link from 'next/link';
import Image from 'next/image';

export default function Navigation(){
    return (
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
          <Link href="/page2" className="text-sm sm:text-base hover:underline">
            Pag2
          </Link>
        </nav>
      </header>
    );
}