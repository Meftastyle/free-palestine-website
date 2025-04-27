export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-black">
      <h1
        className="text-[10rem] sm:text-[16rem] md:text-[20rem] lg:text-[24rem] xl:text-[28rem] font-extrabold leading-none tracking-tight"
        style={{
          backgroundImage: "url('/images/image02.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          lineHeight: '0.8' // Makes text even more massive by reducing spacing
        }}
      >
        FREE PALESTINE
      </h1>
    </div>
  );
}