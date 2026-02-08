const LoadingAnimation = () => {
  return (
    <div className="flex justify-start">
      <div className="relative overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-md px-4 py-3 max-w-3xl">
        {/* Glow layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10 blur-xl" />

        <div className="relative z-10 flex items-center gap-3">
          {/* Animated dots */}
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:0ms]" />
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse [animation-delay:200ms]" />
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse [animation-delay:400ms]" />
          </div>

          {/* Text */}
          <span className="text-sm text-slate-300 tracking-wide">
            AI is thinking<span className="animate-pulse">…</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
