// Testimonials Component
// Displays customer reviews

function Testimonials() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The best coffee I've ever had! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Amazing selection of coffee and the pastries are to die for. This place has become my go-to spot for weekend brunches.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "I love the dark roast here! The baristas really know their craft. Highly recommend the cappuccino - it's perfect!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Real reviews from real coffee lovers
        </p>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-amber-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Stars Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">⭐</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Name */}
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

