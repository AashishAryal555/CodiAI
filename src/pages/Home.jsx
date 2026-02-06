import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* ================= STARS ================= */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        {/* ================= MILKY WAY ================= */}
        <div className="milkyway"></div>

        {/* ================= SHOOTING STARS ================= */}
        <span className="shooting-star"></span>
        <span className="shooting-star delay-1"></span>
        <span className="shooting-star delay-2"></span>

        {/* ================= PLANETS ================= */}
        <div className="planet planet-one"></div>
        <div className="planet planet-two"></div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10">
          {/* HERO */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.9)]">
              CodiAI
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10">
              Learn Coding Smarter — powered by AI, inspired by the universe.
            </p>

            <div className="flex gap-4">
              {/* LINKED GET STARTED */}
              <Link to="/learning">
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:scale-110 transition shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                  Get Started
                </button>
              </Link>

              {/* LINKED EXPLORE TOPICS */}
              <Link to="/topics">
                <button className="px-8 py-3 rounded-xl border border-purple-400 hover:bg-purple-500/20 transition">
                  Explore Topics
                </button>
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      {/* ================= CSS ANIMATIONS ================= */}
      <style>{`
        /* STARFIELDS */
        .stars, .stars2, .stars3 {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          animation: moveStars 200s linear infinite;
        }

        .stars {
          background-image:
            radial-gradient(1px 1px at 10% 20%, white, transparent),
            radial-gradient(1px 1px at 80% 40%, white, transparent),
            radial-gradient(1px 1px at 50% 90%, white, transparent);
          opacity: 0.6;
        }

        .stars2 {
          background-image:
            radial-gradient(2px 2px at 30% 60%, white, transparent),
            radial-gradient(2px 2px at 70% 20%, white, transparent);
          opacity: 0.4;
          animation-duration: 300s;
        }

        .stars3 {
          background-image:
            radial-gradient(3px 3px at 90% 80%, white, transparent);
          opacity: 0.2;
          animation-duration: 400s;
        }

        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }

        /* MILKY WAY */
        .milkyway {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(168,85,247,0.25), transparent 70%);
          animation: drift 60s ease-in-out infinite alternate;
        }

        @keyframes drift {
          from { transform: rotate(0deg); }
          to { transform: rotate(5deg); }
        }

        /* PLANETS */
        .planet {
          position: absolute;
          border-radius: 9999px;
          animation: float 10s ease-in-out infinite;
        }

        .planet-one {
          width: 220px;
          height: 220px;
          top: 15%;
          left: 10%;
          background: linear-gradient(135deg, #a855f7, #312e81);
          box-shadow: 0 0 120px rgba(168,85,247,0.6);
        }

        .planet-two {
          width: 300px;
          height: 300px;
          bottom: 20%;
          right: 10%;
          background: linear-gradient(135deg, #ec4899, #581c87);
          box-shadow: 0 0 150px rgba(236,72,153,0.5);
          animation-duration: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        /* SHOOTING STARS */
        .shooting-star {
          position: absolute;
          top: 20%;
          left: -20%;
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          animation: shoot 6s linear infinite;
        }

        .delay-1 { animation-delay: 2s; top: 40%; }
        .delay-2 { animation-delay: 4s; top: 60%; }

        @keyframes shoot {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(150vw); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Home;
