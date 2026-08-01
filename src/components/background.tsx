export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />

      {/* Gradient blobs */}
      <div className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-brand-500/25 blur-[120px] animate-float" />
      <div
        className="absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full bg-accent-500/20 blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[30%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/15 blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
