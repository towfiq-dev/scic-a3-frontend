import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-cyan-900/40" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-6 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-6 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 text-center">
          <Sparkles size={16} className="text-amber-400 shrink-0" />
          <span>Limited Time Offer — Save up to 30%</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
          Your Next Adventure
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Starts Now
          </span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Join over 15,000 travelers who trust Wanderlust for their extraordinary journeys. Expert guides, seamless booking, unforgettable memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link href={'/allNav/destinations'} className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto bg-white text-gray-900 px-6 sm:px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-2xl hover:scale-[1.03]">
              Book Your Trip Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </Link>

          <Link href={'/allNav/destinations'} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-white/30 hover:border-white/60 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300">
              Explore Destinations
            </button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-8 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/10">
          {['Free Cancellation', 'Best Price Guarantee', 'Expert Support', 'Instant Confirmation'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
