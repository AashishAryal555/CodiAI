import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Topics = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#02010a] text-white font-sans">
      {/* --- COSMIC BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a051a_0%,_#02010a_100%)]"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"></div>

        <div className="shooting-star star-1"></div>
        <div className="shooting-star star-2"></div>
        <div className="shooting-star star-3"></div>

        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 px-6 py-24 max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in-down">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-indigo-500 hover:scale-105 transition-transform duration-700 cursor-default">
              EXPLORE TOPICS
            </h1>
            <p className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-xs animate-pulse">
              Dive into the universe of coding knowledge
            </p>
          </div>

          {/* Grid Layout for Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* What CodiAI Does - Feature Hero Card */}
            <section
              className="md:col-span-2 group relative p-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:from-indigo-500/60 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-[#05010d]/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.4rem] h-full border border-white/5 group-hover:border-indigo-500/30 transition-all duration-500 shadow-2xl group-hover:shadow-indigo-500/10">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-4xl group-hover:rotate-12 transition-transform">
                    💡
                  </span>{" "}
                  What CodiAI Does
                </h2>
                <h3 className="text-xl text-indigo-300 font-semibold mb-6">
                  Code with confidence. Learn with clarity.
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                  CodiAI helps you understand coding concepts step-by-step.
                  Whether you're learning your first programming language or
                  sharpening advanced skills, CodiAI explains code in a simple,
                  practical, and developer-friendly way.
                </p>
              </div>
            </section>

            {/* Why Choose CodiAI - Glass Card */}
            <section
              className="group p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
                <span className="group-hover:animate-bounce">🧠</span> Why
                Choose CodiAI?
              </h2>
              <ul className="space-y-4">
                {[
                  "Easy-to-understand explanations",
                  "Real-world project examples",
                  "Multi-language & Framework support",
                  "AI-assisted fast learning",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="text-indigo-500 mt-1 animate-pulse">
                      ✦
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* What You'll Learn - Glass Card */}
            <section
              className="group p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
                <span className="group-hover:rotate-[360deg] transition-transform duration-1000">
                  📚
                </span>{" "}
                What You’ll Learn
              </h2>
              <ul className="space-y-4">
                {[
                  "Web Development (React, JS)",
                  "Logic & Problem Solving",
                  "APIs & Backend Systems",
                  "Clean Code Best Practices",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="text-purple-500 mt-1 animate-pulse">
                      ✦
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Audience Section - Centered Wide Card */}
            <section
              className="md:col-span-2 p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center hover:border-pink-500/30 transition-all duration-700 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-2xl font-bold mb-10 text-pink-400">
                🌍 Who Is CodiAI For?
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  "👨‍🎓 Students",
                  "👩‍💻 Beginners",
                  "🧑‍🔧 Developers",
                  "🚀 Tech Curious",
                ].map((user, i) => (
                  <div
                    key={i}
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-110 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    <p className="font-semibold text-lg">{user}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      {/* --- GALAXY ANIMATIONS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
        .star-1 { top: 5%; right: 10%; animation: shooting-star 10s linear infinite; }
        .star-2 { top: 20%; right: 30%; animation: shooting-star 15s linear infinite 3s; }
        .star-3 { top: 40%; right: 5%; animation: shooting-star 8s linear infinite 6s; }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1.2s ease-out forwards; }

        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { 
          opacity: 0;
          animation: slide-up 1s ease-out forwards; 
        }
      `,
        }}
      />
    </div>
  );
};

export default Topics;
