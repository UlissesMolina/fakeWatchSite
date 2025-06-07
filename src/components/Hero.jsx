import React, { useState, useEffect } from 'react'

function Hero() {
  const images = [
    '/assets/stock1.jpg',
    '/assets/stock2.jpg',
    '/assets/stock3.jpg'
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Images with Transition */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            The ChronoX
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            The next generation of smartwatches
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero 