import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "./image/IMG_9150.png";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#02010a] text-white font-sans selection:bg-indigo-500/30">
      <Navbar />

      {/* --- HYPER-SPACE BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a0b2e_0%,_#02010a_100%)]"></div>

        {/* Moving Starfield */}
        <div className="stars-parallax absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-warp-speed"></div>

        {/* Dynamic Light Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] animate-drift"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[150px] animate-drift-reverse"></div>

        {/* The Solar Anchor */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10">
        {/* --- HERO: FOUNDER SPOTLIGHT --- */}
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Interactive Image Shield */}
          <div className="relative group animate-reveal-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#05010d]">
              <img
                src={Image}
                alt="Founder"
                className="w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02010a] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl animate-float">
              <p className="text-indigo-400 font-black text-2xl">100+</p>
              <p className="text-white/50 text-[10px] uppercase tracking-widest">
                Projects
              </p>
            </div>
          </div>

          {/* Right: Text with Reveal Stagger */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-md bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase animate-reveal-down">
                Founder & Architect
              </span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white animate-reveal-right transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-shimmer">
                Aashish <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-shimmer">
                  Aryal
                </span>
              </h2>
            </div>

            <p
              className="text-xl text-slate-400 leading-relaxed font-light max-w-xl animate-reveal-up"
              style={{ animationDelay: "0.4s" }}
            >
              Weaving the future of{" "}
              <span className="text-white font-medium italic underline decoration-indigo-500/50">
                Human-AI Interaction
              </span>
              . Driven by a passion for technology and education, Aashish
              bridged the gap between complex programming and human intuition.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 animate-reveal-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.05] transition-all group">
                <span className="text-2xl mb-4 block group-hover:scale-125 transition-transform">
                  🚀
                </span>
                <h4 className="font-bold text-white mb-1">Vision</h4>
                <p className="text-xs text-slate-500">
                  Terraforming digital education through AI.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all group">
                <span className="text-2xl mb-4 block group-hover:scale-125 transition-transform">
                  🧠
                </span>
                <h4 className="font-bold text-white mb-1">Philosophy</h4>
                <p className="text-xs text-slate-500">
                  Code is the language of the modern universe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TIMELINE: THE COSMIC ODYSSEY --- */}
        <div className="px-6 py-32 max-w-6xl mx-auto">
          <div className="text-center mb-32 group">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 transition-all duration-500 group-hover:tracking-[0.1em]">
              The CodiAI Story
              <p className="mt-4 text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs">
                Founder's Legacy & The Birth of CodiAI
              </p>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* The Laser Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent hidden md:block"></div>

            {[
              {
                phase: "01",
                title: "THE SPARK",
                color: "indigo",
                desc: "Every great galaxy starts with a single spark. Aashish didn't just want a website; he envisioned a habitat for curiosity. He looked at the fragmented world of coding tutorials and saw a void that needed to be filled with intelligence and structure.",
              },
              {
                phase: "02",
                title: "HABITAT",
                color: "purple",
                desc: "Architecture is about balance. By securing essential resources and assembling a team of stellar minds, Aashish built the \"CodiAI Engine\"—a self-sustaining cycle where AI logic meets human creativity, turning passive learning into an active ecosystem.",
              },
              {
                phase: "03",
                title: " Shaping the Next Generation",
                color: "pink",
                desc: "This isn't just about code anymore—it's a movement. CodiAI is terraforming the digital future by empowering creators to build their own worlds. Aashish has ensured that the next generation doesn't just write lines; they architect universes.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-32 group ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-[45%] p-10 rounded-[3rem] bg-zinc-950/50 backdrop-blur-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500 opacity-50`}
                  ></div>
                  <span
                    className={`text-${item.color}-400 font-black text-xs tracking-widest uppercase`}
                  >
                    Phase {item.phase}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Orbital Node */}
                <div className="hidden md:flex z-20 w-14 h-14 rounded-full bg-black border border-white/20 items-center justify-center group-hover:border-indigo-500 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <div
                    className={`w-3 h-3 rounded-full bg-${item.color}-500 animate-ping`}
                  ></div>
                </div>

                <div className="md:w-[45%] opacity-10 group-hover:opacity-30 transition-opacity">
                  <h2 className="text-8xl font-black tracking-tighter">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {/* --- CUSTOM ANIMATION ENGINE --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes warp-speed {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(-20px); }
          100% { transform: scale(1) translateY(0); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes reveal-left {
          from { opacity: 0; transform: translateX(-100px) skewX(-10deg); }
          to { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes reveal-right {
          from { opacity: 0; transform: translateX(100px) skewX(10deg); }
          to { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .animate-warp-speed { animation: warp-speed 20s linear infinite; }
        .animate-drift { animation: drift 15s ease-in-out infinite; }
        .animate-drift-reverse { animation: drift 18s ease-in-out infinite reverse; }
        .animate-shimmer { background-size: 200% auto; animation: shimmer 4s linear infinite; }
        .animate-reveal-left { animation: reveal-left 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-right { animation: reveal-right 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-up { opacity: 0; animation: reveal-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 10s ease-in-out infinite; }
      `,
        }}
      />
    </div>
  );
};

export default AboutUs;
