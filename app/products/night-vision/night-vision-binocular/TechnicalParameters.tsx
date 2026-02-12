"use client";

export default function TechnicalParameters() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)]">
            Technical Parameters
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">

          <div className="grid grid-cols-1 md:grid-cols-2 text-sm sm:text-base">

            {/* Row 1 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200 bg-gray-50">
              Gen 2+ II tube / Gen 3 II tube. (Optional)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
              Magnification:- 4X / 5X / 7X
            </div>

            {/* Row 2 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200">
              Automatic Gain Control (AGC)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
              Low Battery Indicator
            </div>

            {/* Row 3 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200 bg-gray-50">
              Brightness Source Protection (BSP)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
              IP 66 / 67 Encapsulation
            </div>

            {/* Row 4 */}
            <div className="px-4 sm:px-6 py-4 md:border-r border-gray-200">
              Integrated IR laser
            </div>
            <div className="px-4 sm:px-6 py-4"></div>

          </div>
        </div>
      </div>
    </section>
  );
}
