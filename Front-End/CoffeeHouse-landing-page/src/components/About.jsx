// About Component
// Displays the coffee shop's story

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          About Us
        </h2>
        
        {/* Story Content */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Welcome to Coffee House, where passion meets perfection in every cup. 
            Our journey began with a simple dream: to create a space where coffee 
            lovers can experience the finest brews in a warm, welcoming atmosphere.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            We source our beans from the world's best coffee regions, ensuring 
            each batch is carefully selected and roasted to perfection. Our skilled 
            baristas craft each beverage with precision and care, bringing out 
            the unique flavors and aromas that make our coffee exceptional.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Coffee House, we believe that great coffee brings people together. 
            Whether you're starting your day, taking a break, or catching up with 
            friends, we're here to make your coffee experience memorable. 
            Come visit us and taste the difference that passion and quality make.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

