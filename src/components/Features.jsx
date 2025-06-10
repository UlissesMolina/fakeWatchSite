import React from 'react'
import { BatteryMedium } from 'lucide-react'
import { motion } from 'framer-motion'

function BatteryDisplay() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-white dark:bg-gray-800 dark:border-2 dark:border-gray-700 p-8 rounded-2xl shadow-lg"
    >
      <div className="relative w-32 h-16 border-4 border-gray-800 dark:border-gray-200 rounded-lg overflow-hidden mx-auto">
        <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gray-800 rounded-r-lg" />
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "85%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="h-full bg-green-400 dark:bg-green-500"
        />
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: false }}
        className="mt-4 space-y-2"
      >
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">Current Charge</div>
        <div className="text-3xl font-bold text-green-500">85%</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Est. 24hrs remaining</div>
      </motion.div>
    </motion.div>
  )
}

function CircularBattery() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-white dark:bg-gray-800 dark:border-2 dark:border-gray-700 p-8 rounded-2xl shadow-lg flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700" />
        {/* Animated progress circle */}
        <motion.div
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.85 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4ADE80"
              className="dark:stroke-green-500"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>
        </motion.div>
        {/* Battery icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <BatteryMedium size={32} className="text-gray-800 dark:text-gray-200" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">Battery Health</div>
        <div className="text-3xl font-bold text-green-500">85%</div>
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 py-12 sm:py-16 md:py-20">
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Battery Life for up to 24 hours
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Fast charging and long-lasting battery life that keeps you powered throughout the day.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BatteryDisplay />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
              className="bg-white dark:bg-gray-800 dark:border-2 dark:border-gray-700 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 dark:text-white">Charging Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2">⚡</span> Fast charging - 0 to 50% in 30min
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2">🔋</span> Intelligent battery management
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2">📱</span> Wireless charging compatible
                </li>
              </ul>
            </motion.div>
            <CircularBattery />
          </div>
        </div>
      </motion.section>

      {/* Feature Section 2 */}
      <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Feature Two</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Another great feature that sets you apart. Each section is full height and scrolls into view.
          </p>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Feature Three</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The third amazing feature that customers love. Scroll down to see each section.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Features