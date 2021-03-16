import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-blue-800 border-b-8 border-blue-500 -mt-8">
      <div className="flex justify-center p-10 space-x-4 md:space-x-10">
        <div className="transform rotate-6 my-6 -mb-6 mr-2">
          <Image
            src="/images/lego-head.png"
            height={70}
            width={70}
            alt="lego head"
          />
        </div>
        <Link href="/">
          <a>
            <h2 className="font-extrabold tracking-tight text-red-600 text-2xl -mb-6 md:-mb-2 md:text-4xl transform -skew-y-2">
              <span className="block animate-pulse">Ellie's Lego Land</span>
              <span className="block text-yellow-400 font-bold ">
                Custom and Standard Builds
              </span>
            </h2>
          </a>
        </Link>
      </div>
    </div>
  );
}
