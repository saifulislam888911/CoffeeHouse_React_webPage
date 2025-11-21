import aboutImage from "../assets/Coffee House Image/Bg and Section/bg1.jpg";

const milestones = [
  { label: "Years roasting", value: "15+" },
  { label: "Local farmers", value: "120" },
  { label: "Cups daily", value: "3k" }
]

const pillars = [
  { title: "Small Batch Roasting", desc: "Roasted every dawn for peak aroma and sweetness." },
  { title: "Artisanal Baristas", desc: "Certified team pouring latte art with heart." },
  { title: "Community Space", desc: "Open mics, cupping sessions, and night markets." }
]

function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="absolute -top-10 right-0 w-64 h-64 bg-amber-300/40 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/50 blur-3xl rounded-full" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl grid gap-10 lg:grid-cols-[3fr,2fr] items-stretch relative">
        <div className="space-y-8 bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-8 md:p-10 border border-amber-100/60 dark:border-gray-800 backdrop-blur">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.4em] text-amber-500 text-xs">Our story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50">
              Rooted in Dhaka, brewed for the world
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Coffee House was born in Khilgaon with a promise: highlight Bangladeshi terroir through
              specialty coffee rituals. We partner with smallholder farmers, roast in micro-batches,
              and keep the ambience intimate, so every visit feels like coming home.
            </p>
            <p>
              Our roasting team sources single-origin beans from Sylhet, Chattogram, and beyond, balancing
              heritage methods with modern profiling. Each cup celebrates the growers, the artisans, and
              the community who gather around our bar.
            </p>
            <p>
              Whether you drop in for a slow morning pour-over or a late-night jazz set, we’re here to craft
              memorable sips with heart, humidity, and Dhaka soul.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {milestones.map((item) => (
              <div key={item.label} className="p-4 rounded-2xl bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-800">
                <p className="text-3xl font-bold text-gray-900 dark:text-amber-50">{item.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-2xl border border-amber-100 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80">
                <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest">{pillar.title}</p>
                <p className="text-gray-600 dark:text-gray-400">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative h-full min-h-[28rem] rounded-[32px] overflow-hidden shadow-2xl border border-amber-100/60 dark:border-gray-800">
          <img
            src={aboutImage}
            alt="Coffee experience"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white space-y-3">
            <p className="text-sm uppercase tracking-[0.5em] text-amber-200">Since 2010</p>
            <p className="text-3xl font-bold">Slow roasting, soulful gatherings</p>
            <div className="flex gap-4 text-sm text-amber-200">
              <span>Dhaka • Sylhet • Chattogram</span>
              <span>•</span>
              <span>Single origin flights daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

