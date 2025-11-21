// Contact Component
// Displays contact information, location map, and hours

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-100">
          Visit Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Drop by our Khilgaon roastery, savor a cup, or ping us for catering and events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-amber-100/60 dark:border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-white opacity-70 pointer-events-none dark:from-gray-800 dark:via-transparent dark:to-gray-900" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-amber-100 flex items-center gap-2">
                <span className="text-3xl">📬</span>
              Contact Information
              </h3>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-gray-800/60 border border-amber-100 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 flex items-center gap-2">
                    📍 Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    House 12, Road 5, Block C<br />
                    Khilgaon, Dhaka 1219<br />
                    Bangladesh
                  </p>
                </div>
                
                {/* Phone */}
                <div className="p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-amber-100 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 flex items-center gap-2">
                    📞 Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +880 1712-456789<br />
                    +880 1901-234567
                  </p>
                </div>
                
                {/* Email */}
                <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-gray-800/60 border border-amber-100 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 flex items-center gap-2">
                    ✉️ Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    hello@coffeehousebd.com<br />
                    events@coffeehousebd.com
                  </p>
                </div>
                
                {/* Hours */}
                <div className="p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-amber-100 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 flex items-center gap-2">
                    🕐 Hours
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p>Saturday - Thursday: 8:00 AM - 11:00 PM</p>
                    <p>Friday: 3:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Embed */}
          <div className="group bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-amber-100/60 dark:border-gray-800 relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.867351713005!2d90.42408187598631!3d23.788793987220002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85cb3f739cd%3A0x32f91be8efdc6ef8!2sKhilgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731870000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ minHeight: '420px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee House Khilgaon Location"
              className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

