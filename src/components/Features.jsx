import React from 'react'

function Features() {
  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 py-12 sm:py-16 md:py-20">
      {/* Feature Section 1 */}
      <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Feature One</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Description of your amazing feature goes here. This section will take up the full viewport height.
          </p>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Feature Two</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Another great feature that sets you apart. Each section is full height and scrolls into view.
          </p>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Feature Three</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The third amazing feature that customers love. Scroll down to see each section.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Features 