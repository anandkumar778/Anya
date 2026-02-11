export default function ReferenceStandards() {
  const standards = [
    "JSS 55555",
    "MIL-STD 810",
    "IS 9000",
    "IS 10236",
    "JSS 5855",
    "IEC 60529",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2E8C] mb-6">
            REFERENCE STANDARDS FOR TESTING
          </h2>

          <div className="w-24 h-1 bg-[#1F2E8C] mx-auto rounded-full mb-8"></div>

          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            TAK Laboratory maintains an extensive portfolio of national and
            international reference standards. Our testing services are conducted
            in strict compliance with Clause 5(1) requirements and the standards
            listed below, ensuring precision, reliability and regulatory conformity.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {standards.map((item, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-[#1F2E8C]/20 rounded-2xl py-8 text-center font-semibold text-lg text-gray-700 shadow-md hover:shadow-xl hover:border-[#1F2E8C] transition duration-500"
            >
              <span className="group-hover:text-[#1F2E8C] transition duration-300">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
