import heroBg from "../assets/images/sections/hero.jpg";

const highlights = [
  { label: "Roasts perfected", value: "15+" },
  { label: "Daily brews", value: "3K" },
  { label: "Bangladeshi farmers", value: "120+" }
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent md:to-black/40" />

      <div className="relative pt-28 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[3fr,2fr] items-center text-white">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm uppercase tracking-[0.3em]">
              Freshly Roast • Dhaka
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
              Welcome to <span className="text-amber-400">Coffee House</span>
            </h1>
            <p className="text-lg md:text-2xl text-amber-100 max-w-2xl mx-auto lg:mx-0">
              Where every cup tells a story, inspired by Khilgaon's bustling mornings, crafted with single-origin beans, and poured with heart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => {
                  const menuSection = typeof document !== "undefined" ? document.getElementById("menu") : null;
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Menu
              </button>
              <button
                type="button"
                onClick={() => {
                  const aboutSection = typeof document !== "undefined" ? document.getElementById("about") : null;
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-white/60 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur"
              >
                Discover Our Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm text-amber-100 max-w-xl mx-auto lg:mx-0">
              {highlights.map((item) => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent pointer-events-none" />
            <div className="relative space-y-4">
              <p className="uppercase text-sm tracking-[0.4em] text-amber-200">
                Featured brew
              </p>
              <h3 className="text-3xl font-semibold">Khilgaon Dawn Pour Over</h3>
              <p className="text-amber-100">
                Notes of jaggery, dark chocolate, and citrus zest. Harvested from
                smallholder farms in Sylhet and roasted fresh every sunrise.
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-sm text-amber-200">Brew time</p>
                  <p className="text-xl font-bold">3:45 min</p>
                </div>
                <div>
                  <p className="text-sm text-amber-200">Serving temp</p>
                  <p className="text-xl font-bold">92°C</p>
                </div>
                <div>
                  <p className="text-sm text-amber-200">Roast</p>
                  <p className="text-xl font-bold">Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
