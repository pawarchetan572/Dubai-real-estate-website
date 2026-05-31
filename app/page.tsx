import React from 'react';
import { Search, MessageSquare, Phone, MapPin, BedDouble, Bath, Square, ArrowUpRight, Menu } from 'lucide-react';

export default function RealEstateLanding() {
  return (
    <div className="bg-[#0B0B0C] text-white font-sans min-h-screen relative selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-[#D4AF37]/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold tracking-widest text-[#D4AF37] flex items-center gap-2">
            aurevorealty <span className="text-white font-light text-sm tracking-normal">DUBAI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="text-[#D4AF37] transition-colors">Home</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Buy Property</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Rent Property</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Luxury Villas</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">About Company</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          {/* Right Action */}
          <button className="hidden md:block bg-gradient-to-r from-[#B38F2D] to-[#D4AF37] text-black px-5 py-2 rounded-full font-semibold text-xs tracking-wider hover:opacity-90 transition-opacity">
            ENQUIRE NOW
          </button>
          
          <Menu className="md:hidden text-[#D4AF37] cursor-pointer" />
        </div>
      </nav>

      {/* 2. VIDEO HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Placeholder Background - Replace src with your luxury Dubai drone video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://player.vimeo.com/external/435649354.sd.mp4?s=6a1240b925b4ffcc1c1ed9152288349bb2d2ed7d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 mt-12 animate-fade-in">
          <span className="text-[#D4AF37] tracking-[0.3em] text-xs font-bold uppercase block mb-4">
            The Pinnacle of Desert Luxury
          </span>
          <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            Define Your Legacy in <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#B38F2D]">
              Dubai's Most Elite
            </span> Mansions
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-light tracking-wide">
            Curated ultra-luxury residences featuring unparalleled architectural mastery and panoramic views of the Dubai Skyline.
          </p>

          {/* 3. AI SEARCH FILTER (Glassmorphism) */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl max-w-3xl mx-auto text-left">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-3 text-xs tracking-wider">
              <button className="text-[#D4AF37] font-semibold border-b-2 border-[#D4AF37] pb-3 px-2">BUY</button>
              <button className="text-gray-400 hover:text-white pb-3 px-2 transition-colors">RENT</button>
              <button className="text-gray-400 hover:text-white pb-3 px-2 transition-colors">COMMERCIAL</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <label className="block text-[10px] text-[#D4AF37] tracking-widest uppercase mb-1 font-semibold">Location</label>
                <select className="w-full bg-transparent border-none text-sm text-white focus:ring-0 p-0 cursor-pointer">
                  <option className="bg-[#0B0B0C]">Palm Jumeirah, Dubai</option>
                  <option className="bg-[#0B0B0C]">Downtown Dubai</option>
                  <option className="bg-[#0B0B0C]">Dubai Marina</option>
                  <option className="bg-[#0B0B0C]">Emirates Hills</option>
                </select>
              </div>
              
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-4">
                <label className="block text-[10px] text-[#D4AF37] tracking-widest uppercase mb-1 font-semibold">Property Type</label>
                <select className="w-full bg-transparent border-none text-sm text-white focus:ring-0 p-0 cursor-pointer">
                  <option className="bg-[#0B0B0C]">Luxury Villa</option>
                  <option className="bg-[#0B0B0C]">Penthouse Duplex</option>
                  <option className="bg-[#0B0B0C]">Signature Mansion</option>
                </select>
              </div>

              <div className="pt-2 md:pt-0">
                <button className="w-full bg-gradient-to-r from-[#B38F2D] to-[#D4AF37] text-black font-semibold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 tracking-widest hover:scale-[1.02] transition-transform duration-300">
                  <Search size={14} className="stroke-[3]" />
                  ASK AI SEARCH
                </button>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-gray-400 italic flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Try typing: "A 5-bed villa in Palm Jumeirah with a private beach access and infinity pool"
            </div>
          </div>
        </div>
      </section>

      {/* 4. LUXURY VILLAS / PROPERTY DETAIL SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-[#D4AF37] tracking-widest text-xs font-bold uppercase block mb-2">Curated Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Featured Ultra-Luxury Villas</h2>
          </div>
          <a href="#" className="text-[#D4AF37] group text-sm font-semibold tracking-wider flex items-center gap-1 hover:underline">
            VIEW ALL PROPERTIES <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* PROPERTY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Dynamic Animated Card */}
          {[
            {
              title: "The Celestial Mansion",
              location: "Palm Jumeirah, Dubai",
              price: "AED 85,000,000",
              img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
              beds: 6, baths: 7, sqft: "12,450"
            },
            {
              title: "Skyline Oasis Penthouse",
              location: "Downtown Dubai",
              price: "AED 42,000,000",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
              beds: 4, baths: 5, sqft: "8,900"
            },
            {
              title: "Serene Water Villa",
              location: "Dubai Marina",
              price: "AED 56,500,000",
              img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
              beds: 5, baths: 6, sqft: "10,200"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#121214] border border-white/5 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-md uppercase">
                  FOR SALE
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                  <MapPin size={12} className="text-[#D4AF37]" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-xl font-medium tracking-wide mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                
                {/* Amenities Icons */}
                <div className="flex items-center justify-between border-y border-white/5 py-3 my-4 text-xs text-gray-400 font-light">
                  <div className="flex items-center gap-1.5">
                    <BedDouble size={14} className="text-[#D4AF37]/70" />
                    <span>{item.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath size={14} className="text-[#D4AF37]/70" />
                    <span>{item.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square size={12} className="text-[#D4AF37]/70" />
                    <span>{item.sqft} Sq.Ft</span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500">Premium Price</span>
                    <span className="text-lg font-semibold text-[#D4AF37]">{item.price}</span>
                  </div>
                  <button className="p-3 bg-white/5 group-hover:bg-[#D4AF37] text-white group-hover:text-black rounded-xl transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 5. ABOUT COMPANY SECTION */}
      <section className="bg-[#070708] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
            <img 
              src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80" 
              alt="Dubai Architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </div>
          <div className="space-y-6">
            <span className="text-[#D4AF37] tracking-widest text-xs font-bold uppercase block">About aurevorealty </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">We Bridge Visionary Architecture With Elite Living</h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Established in the heart of Dubai, our brokerage specializes exclusively in off-market trophy assets, hyper-luxury penthouses, and bespoke beachfront villas. We cater to the world's most discerning investors who demand flawless discretion and elite market intelligence.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <span className="block text-2xl font-serif text-white">AED 14B+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Transactions Completed</span>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <span className="block text-2xl font-serif text-white">98%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">UHNW Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI CHAT / WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* Decorative dynamic notification tooltip */}
        <div className="bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-white rounded-xl px-3 py-2 text-[11px] font-light max-w-[200px] shadow-xl animate-bounce hidden sm:block">
          ✨ <span className="text-[#D4AF37] font-semibold">AI Assistant</span> online. Click to find villas instantly!
        </div>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/971500000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} className="fill-white stroke-none" />
          <span className="absolute right-14 bg-black border border-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:inline">
            WhatsApp Concierge
          </span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} ELEVATE DUBAI REAL ESTATE. All Rights Reserved.
      </footer>
    </div>
  );
}