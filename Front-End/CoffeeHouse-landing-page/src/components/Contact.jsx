// Contact Component
// Displays contact information, location map, and hours

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          Visit Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  📍 Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Coffee Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>
              
              {/* Phone */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  📞 Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  (555) 123-4567
                </p>
              </div>
              
              {/* Email */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  ✉️ Email
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  info@coffeehouse.com
                </p>
              </div>
              
              {/* Hours */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  🕐 Hours
                </h4>
                <div className="text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Embed */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* Google Maps Embed */}
            {/* Replace the src URL with your actual location's Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841321915747!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee House Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

