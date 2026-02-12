export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center pt-24 w-full">
      <div className="animate-fadeInUp">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Global Talent Solutions<br />
          <span className="text-orange bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent">
            Powered by Bangladesh
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-gray-300">
          Hire World‑Class Remote Talent from Bangladesh
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 leading-relaxed text-gray-400">
          taskopedia connects international businesses and individuals with highly skilled, 
          English‑speaking professionals from Bangladesh - offering a smarter alternative to 
          traditional freelancing platforms.
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-12 leading-relaxed text-gray-400">
          From long‑term offshore placements to flexible project support, we help you build 
          reliable teams while empowering Bangladeshi professionals with stable global careers.
        </p>
        <div className="text-2xl md:text-3xl font-bold text-orange mb-12 animate-pulse">
          Hire Smarter. Scale Faster. Work Globally.
        </div>
        <a 
          href="#pricing" 
          className="inline-block frost px-10 py-5 rounded-lg text-orange hover:bg-orange hover:text-black transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-orange/50 hover:scale-105"
        >
          Get Started →
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-orange"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
