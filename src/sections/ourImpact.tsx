import Image from "next/image"

export default function ImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Our Impact</h2>
          <p className="mt-4 max-w-[700px] text-gray-600 md:text-xl">
            Transforming agriculture through data and financial inclusion across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/impact.jpg"
              alt="Farmers harvesting crops in a greenhouse"
              width={800}
              height={650}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Stats Column */}
          <div className="space-y-6">
            {/* Water Conservation Card */}
            <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-6">
              <div className="text-4xl md:text-5xl font-bold text-green-800 whitespace-nowrap">
                1200<span className="text-green-200">+</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-green-800">Farmers Empowered</h3>
                <p className="text-gray-600">
                  We have connected over 1,200 farmers with banks, enabling them to access financial services
                    and improve their livelihoods.
                </p>
              </div>
            </div>

            {/* Farmers Equipped Card */}
            <div className="bg-green-50 rounded-xl p-6 flex items-start gap-6">
              <div className="text-4xl md:text-5xl font-bold text-green-800 whitespace-nowrap">
                $50K<span className="text-green-200">+</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-green-800">Financial Access Provided</h3>
                <p className="text-gray-600">
                Through Agaseke Finance, we've facilitated access to over $50,000 in loans and financial services for previously underserved farming communities.
                </p>
              </div>
            </div>

            {/* Land Optimization Card */}
            <div className="bg-green-800 rounded-xl p-6 flex items-start gap-6 text-white">
              <div className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                45<span className="text-green-600">%</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Average Yield Increase</h3>
                <p className="text-green-50">
                Farmers using our data-driven insights have experienced an average 45% increase in crop yields, improving their income and food security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
