export default function Custom404() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
      <div className="flex md:flex-col mx-auto mt-5 md:mt-64 md:mx-auto">
        <h1 className="text-3xl mr-5 md:text-8xl font-bold font-mono text-white opacity-80">
          404
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-white opacity-80">
          Page Not Found
        </h1>
      </div>
      <img
        className="h-auto md:h-96 mx-5 md:h-4/5 mt-5 md:mt-8"
        src="/images/emmet-lego.png"
        alt="Emmet from Lego Movie running and screaming"
      />
    </div>
  );
}
