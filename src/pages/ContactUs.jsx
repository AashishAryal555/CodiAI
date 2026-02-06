import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#02010a] text-white font-sans">
      {/* --- COSMIC BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a051a_0%,_#02010a_100%)]"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"></div>
        <div className="shooting-star star-1"></div>
        <div className="shooting-star star-2"></div>
        <div className="shooting-star star-3"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 px-6 py-24 flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-indigo-500">
              Contact Info
            </h1>
            <p className="text-slate-400 font-light tracking-[0.4em] uppercase text-xs">
              Reach the team or the founder directly 🚀
            </p>
          </div>

          {/* SIDE-BY-SIDE GRID CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
            {/* 1. Team Contact Card */}
            <div className="contact-card p-1 border border-white/10 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl shadow-2xl">
              <div className="bg-[#05010d]/80 rounded-[2.9rem] p-10 h-full flex flex-col justify-center space-y-10 text-center">
                <div className="group">
                  <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-pink-400 transition-colors">
                    System ID
                  </p>
                  <p className="text-2xl font-bold tracking-tight text-white transition-transform group-hover:scale-105">
                    CodiAI Team
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto"></div>

                <div className="group">
                  <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-pink-400 transition-colors">
                    Support Uplink
                  </p>
                  <a
                    href="mailto:codiai555@gmail.com"
                    className="text-xl md:text-2xl font-bold tracking-tight hover:text-indigo-300 transition-all underline underline-offset-8 decoration-indigo-500/30"
                  >
                    codiai555@gmail.com
                  </a>
                </div>

                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto"></div>

                <div className="group">
                  <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-pink-400 transition-colors">
                    Office Line
                  </p>
                  <p className="text-xl md:text-2xl font-bold tracking-tight">
                    01-5222310
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Founder Contact Card (Aashish Aryal) */}
            <div className="contact-card p-1 border border-purple-500/20 rounded-[3rem] bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-3xl shadow-2xl">
              <div className="bg-[#080212]/90 rounded-[2.9rem] p-10 h-full flex flex-col justify-center space-y-10 text-center relative overflow-hidden">
                {/* Subtle Founder Background Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 blur-[80px]"></div>

                <div className="group">
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-white transition-colors">
                    Founder & Architect
                  </p>
                  <p className="text-2xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform">
                    Aashish Aryal
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto"></div>

                <div className="group">
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-white transition-colors">
                    Personal Mail
                  </p>
                  <a
                    href="mailto:aashisharyal555@gmail.com"
                    className="text-xl md:text-2xl font-bold tracking-tight hover:text-purple-300 transition-all underline underline-offset-8 decoration-purple-500/30"
                  >
                    aashisharyal39@gmail.com
                  </a>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto mt-6 mb-4"></div>
                  <div className="group">
                    <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-pink-400 transition-colors">
                      Contact
                    </p>
                    <p className="text-xl md:text-2xl font-bold tracking-tight">
                      +977-9803701977
                    </p>
                  </div>
                </div>

                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto"></div>

                <div className="flex justify-center gap-6 pt-2">
                  <a
                    href="https://www.linkedin.com/in/aashish-aryal-7769a0370?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    className="text-[10px] font-black uppercase tracking-widest px-5 py-2 border border-white/5 rounded-full hover:bg-white/10 transition-all"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://wa.me/qr/RNPJYWSQVLPNH1"
                    className="text-[10px] font-black uppercase tracking-widest px-5 py-2 border border-white/5 rounded-full hover:bg-white/10 transition-all"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.facebook.com/aashish.aryal.130090"
                    className="text-[10px] font-black uppercase tracking-widest px-5 py-2 border border-white/5 rounded-full hover:bg-white/10 transition-all"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* --- GALAXY STYLES --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* 1. Base Entry Animations */
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        .shooting-star {
          position: absolute; width: 2px; height: 100px;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
          opacity: 0; z-index: 1;
        }
        .star-1 { top: 10%; right: 10%; animation: shooting-star 8s linear infinite; }
        .star-2 { top: 30%; right: 40%; animation: shooting-star 12s linear infinite 2s; }
        .star-3 { top: 0%; right: 20%; animation: shooting-star 6s linear infinite 4s; }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px) scale(0.95); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. Card Entrances */
        @keyframes reveal-card {
           0% { opacity: 0; transform: translateY(50px) rotateX(10deg); }
           100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        .contact-card {
           opacity: 0;
           animation: reveal-card 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .contact-card:nth-child(1) { animation-delay: 0.3s; }
        .contact-card:nth-child(2) { animation-delay: 0.6s; }

        /* 3. Hover & Interactive FX */
        .contact-card { transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .contact-card:hover {
           transform: translateY(-12px) scale(1.02);
           box-shadow: 0 40px 80px -20px rgba(79, 70, 229, 0.3);
           border-color: rgba(255,255,255,0.3);
        }

        /* 4. Text Shimmering (Applied to Header) */
        h1 {
          background-size: 200% auto;
          animation: textShimmer 5s linear infinite;
        }
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* 5. Icon/Group Float */
        .group:hover p {
           text-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
        }

        /* 6. Link underline animation */
        a {
          position: relative;
          display: inline-block;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background: currentColor;
          transition: width 0.4s ease;
        }
        a:hover::after {
          width: 100%;
        }
      `,
        }}
      />
    </div>
  );
};

export default ContactUs;
