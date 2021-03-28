import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
      <div className="flex items-start flex-col ml-5 mt-10 md:mt-64 ">
        <h1 className="text-3xl mr-5 md:text-8xl font-bold font-mono text-white opacity-80">
          UH OH!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white opacity-80">
          Something is not awesome
        </h2>

        <Link href="/">
          <a>
            <div className="flex items-center text-left mt-5 text-white">
              <svg
                className="w-7 opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>{" "}
              <p className="ml-2 text-lg font-bold font-mono text-white opacity-80">
                Back to AWESOME
              </p>
            </div>
          </a>
        </Link>
      </div>
      <img
        className="h-auto md:h-96 mx-5 md:h-4/5 mt-5 md:mt-8"
        src="/images/emmet-lego.png"
        alt="Emmet from Lego Movie running and screaming"
      />
    </div>
  );
}
