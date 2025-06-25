export default function Hero() {
  return (
    <div className="relative h-70  md:h-100 mt-25 md:mt-25 flex items-center justify-center bg-cover bg-center bg-blue-700">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-6 mb-30">
        <h1 className="text-3xl  md:text-7xl font-bold mb-4">
          Welcome to <span className="text-blue-400">Film in the Park (FLIP)</span>
        </h1>
        <p className="text-lg md:text-3xl max-w-2xl mx-auto italic">
          Empowering Voices, Inspiring Changes...
        </p>
        

       
      </div>
    </div>
  );
}