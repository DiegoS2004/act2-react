import Image from "next/image";

export default function Page2() {
  return (
    <div className="min-h-screen bg-black text-white">
        <br></br>
        <Image
            src="/IMG_2916.jpg"
            alt="Centered Image"
            layout="fit"
            width={800}
            height={800}
            className= "pd-4"

        />
    </div>
  );
}