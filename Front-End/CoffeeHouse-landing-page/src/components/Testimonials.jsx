import { useEffect, useMemo, useState } from "react";

function Testimonials() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Tanmoy Ahmed",
      text: "The latte here is incredible! The relaxing ambience and warm service win me over every visit.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Rakibul Hasan",
      text: "My go-to hangout spot with friends. The cold brew has a depth of flavor that’s spot on every time.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Maisha Chowdhury",
      text: "Fresh pastries paired with their specialty coffee make mornings feel special. Service is lightning fast too.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Farhan Islam",
      text: "Every cup tastes consistently great. The baristas are artisans and it shows in each pour.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Nusrat Rahman",
      text: "Rustic interiors, mellow music, and an espresso that hits the sweet spot every single time.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Sadia Karim",
      text: "The flat white is silky smooth and the latte art always makes me smile. Such a welcoming crew!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      name: "Adnan Chowdhury",
      text: "Love their seasonal specials. Whether it’s pumpkin spice or peppermint mocha, they nail the flavors.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      name: "Mouri Anjum",
      text: "The staff remembers my order! That personal touch plus the cozy seating keeps me coming back.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      name: "Imran Sayeed",
      text: "I host client meetings here because the vibe is calm yet energetic. Cappuccino is top tier.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      name: "Shaila Noor",
      text: "Their signature caramel latte is the comfort drink I didn’t know I needed. Love the presentation!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544723795-432537f2b2f5?auto=format&fit=crop&w=600&q=80"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slides = useMemo(() => {
    const chunkSize = 3
    const result = []
    for (let i = 0; i < testimonials.length; i += chunkSize) {
      result.push(testimonials.slice(i, i + chunkSize))
    }
    return result
  }, [testimonials])

  const stats = useMemo(() => {
    const total = testimonials.length
    const average =
      testimonials.reduce((sum, t) => sum + t.rating, 0) / total

    return [
      {
        label: "Average score",
        value: average.toFixed(1),
        helper: "out of 5 stars",
      },
      {
        label: "Reviews captured",
        value: `${total}+`,
        helper: "regulars & first-timers",
      },
      {
        label: "Since",
        value: "2010",
        helper: "brewing stories daily",
      },
    ]
  }, [testimonials])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => clearInterval(interval)
  }, [slides.length, isPaused])
  const togglePause = () => setIsPaused((prev) => !prev)


  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const renderStars = (rating) => {
    const totalStars = 5
    return Array.from({ length: totalStars }, (_, index) => {
      const filled = index + 1 <= Math.floor(rating)
      const half = !filled && index + 0.5 <= rating
      return (
        <span
          key={index}
          className={`text-xl ${
            filled ? "text-amber-400" : half ? "text-amber-300" : "text-gray-300 dark:text-gray-600"
          }`}
        >
          {half ? "⭑" : "★"}
        </span>
      )
    })
  }

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-white via-amber-50/40 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-64 h-64 bg-amber-300/40 blur-3xl rounded-full absolute -top-10 -right-10" />
        <div className="w-72 h-72 bg-amber-100/60 blur-3xl rounded-full absolute bottom-0 left-4" />
      </div>
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-10">
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-50">
            What Our Guests Are Sipping & Saying
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real reviews from Dhaka’s coffee community—capturing the stories brewed in every cup.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/90 dark:bg-gray-900 border border-amber-100 dark:border-gray-800 p-6 shadow-sm backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-amber-50">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-400">{stat.helper}</p>
            </div>
          ))}
        </div>
        
        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-amber-100/60 dark:border-gray-800/80 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
            <div
              className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.7,0,0.2,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-live="polite"
            >
              {slides.map((slide, slideIndex) => (
                <div key={`slide-${slideIndex}`} className="w-full flex-shrink-0 px-2">
                  <div className="grid gap-6 md:grid-cols-3">
                    {slide.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-amber-100/60 dark:border-gray-700/80 hover:-translate-y-1 transition-transform duration-500"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                              {testimonial.name}
                            </p>
                            <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed flex-1">
                          “{testimonial.text}”
                        </p>
                        <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                          <span>☕ Favorite pick</span>
                          <span>•</span>
                          <span>{testimonial.rating.toFixed(1)} / 5</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
            <button
              onClick={goPrev}
              className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors shadow"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-amber-500 w-6" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={togglePause}
              className="px-4 py-2 rounded-full bg-white text-amber-600 border border-amber-200 hover:bg-amber-50 transition-colors text-sm font-semibold dark:bg-gray-900 dark:text-amber-300 dark:border-gray-700"
            >
              {isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            </button>
            <button
              onClick={goNext}
              className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors shadow"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          <div className="mt-8 bg-white/80 dark:bg-gray-900/70 border border-amber-100/60 dark:border-gray-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Share your brew</p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-amber-50">Tell us about your last sip</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Drop a story on Instagram with <span className="font-semibold text-amber-500">#CoffeeHouseDhaka</span> and get featured next.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors"
            >
              Share a Review
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

