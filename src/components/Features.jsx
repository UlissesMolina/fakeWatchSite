import React from 'react'

function Features() {
  return (
    <div className="space-y-32 py-20">
      {/* Feature Section 1 */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Feature One</h2>
          <p className="text-xl text-gray-600">
            Description of your amazing feature goes here. This section will take up the full viewport height.
          </p>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Feature Two</h2>
          <p className="text-xl text-gray-600">
            Another great feature that sets you apart. Each section is full height and scrolls into view.
          </p>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Feature Three</h2>
          <p className="text-xl text-gray-600">
            The third amazing feature that customers love. Scroll down to see each section.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Features 