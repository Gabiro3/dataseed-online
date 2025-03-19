import Image from "next/image"
import { Download, Smartphone, Zap, Shield, Clock, Users, Star } from "lucide-react"
import cogImage from "@/assets/home_screen.png"
import loanImage from "@/assets/loans.png"
import savingsImage from "@/assets/save.png"
import { Header } from "@/sections/Header"

export default function MobileAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#d2ffd5,#FFFFFF_100%)]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Agaseke Finance
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Experience the power of our mobile application designed to transform how farmers access
                financial services.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="bg-[#9aea89] hover:bg-indigo-600 text-white btn btn-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-sm text-gray-500">
                 1000+ farmers onboarded
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:mr-0">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-indigo-100 to-pink-100 rounded-3xl p-6 shadow-xl">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-8 border-white">
                    <div className="relative w-full max-w-[280px] aspect-[9/19]">
                      <Image
                        src={cogImage}
                        alt="Mobile app interface"
                        width={375}
                        height={800}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-500">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mobile application comes packed with powerful features designed to enhance your experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
            {[
              {
                icon: <Zap className="h-10 w-10 text-green-500" />,
                title: "Lightning Fast",
                description: "Optimized performance ensures your app runs smoothly even on slower connections.",
              },
              {
                icon: <Shield className="h-10 w-10 text-green-500" />,
                title: "Secure by Design",
                description: "Enterprise-grade security protects your data and your customers' information.",
              },
              {
                icon: <Clock className="h-10 w-10 text-green-500" />,
                title: "Real-time Updates",
                description: "Get instant notifications and updates without refreshing the application.",
              },
              {
                icon: <Users className="h-10 w-10 text-green-500" />,
                title: "User Management",
                description: "Easily manage user accounts, permissions, and access controls.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-green-500" />,
                title: "Cross-platform",
                description: "Available on iOS and Android with a consistent user experience.",
              },
              {
                icon: <Star className="h-10 w-10 text-green-500" />,
                title: "Customizable",
                description: "Tailor the app to match your brand and specific business requirements.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="p-3 rounded-full bg-indigo-50">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It In Action</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the intuitive interface and powerful features of our mobile application.
              </p>
            </div>
          </div>
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 pt-12 lg:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="relative mx-auto">
    <div className="relative bg-gradient-to-br from-indigo-100 to-pink-100 rounded-3xl p-3 shadow-lg">
      <div className="bg-white rounded-2xl shadow overflow-hidden border-4 border-white">
        <div className="relative w-full max-w-[200px] aspect-[9/19]">
          <Image
            src={cogImage}
            alt="App screenshot 1"
            width={280}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="relative mx-auto">
    <div className="relative bg-gradient-to-br from-indigo-100 to-pink-100 rounded-3xl p-3 shadow-lg">
      <div className="bg-white rounded-2xl shadow overflow-hidden border-4 border-white">
        <div className="relative w-full max-w-[200px] aspect-[9/19]">
          <Image
            src={loanImage}
            alt="App screenshot 2"
            width={280}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="relative mx-auto">
    <div className="relative bg-gradient-to-br from-indigo-100 to-pink-100 rounded-3xl p-3 shadow-lg">
      <div className="bg-white rounded-2xl shadow overflow-hidden border-4 border-white">
        <div className="relative w-full max-w-[200px] aspect-[9/19]">
          <Image
            src={savingsImage}
            alt="App screenshot 3"
            width={280}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] to-[#9ceb8a]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-500">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have to say about Agaseke Finance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
  {[
    {
      name: "John Kamanzi",
      role: "Smallholder Farmer",
      content:
        "Agaseke Finance helped me secure a loan to purchase better seeds and equipment. My yields have increased significantly thanks to their timely support and data-driven lending.",
    },
    {
      name: "Amina Uwase",
      role: "Farmer and Agribusiness Owner",
      content:
        "The process was so easy and fast! I was able to access a loan for irrigation systems, which has transformed the way I grow crops. Agaseke Finance truly understands farmers' needs.",
    },
    {
      name: "David Karangwa",
      role: "Cattle Farmer",
      content:
        "I’ve always struggled to get financial support. Thanks to Agaseke Finance, I was able to get a loan with fair terms to expand my cattle farm and improve the quality of my herd.",
    },
    {
      name: "Sophie Mutoni",
      role: "Agricultural Cooperative Leader",
      content:
        "Our cooperative has been able to access funds to improve our farming practices and infrastructure, all because Agaseke Finance understands the unique challenges farmers face.",
    },
    {
      name: "Moses Niyigena",
      role: "Crop Farmer",
      content:
        "Thanks to Agaseke Finance, I received a loan to buy better equipment and fertilizers. This has allowed me to increase production and profitability, and I’m now expanding my farm.",
    },
    {
      name: "Jean-Pierre Nkurunziza",
      role: "Farmer and Financial Advocate",
      content:
        "The transparent lending process with Agaseke Finance gave me confidence in accessing funds. I’m now planning for the next season with the support they provided.",
    },
  ].map((testimonial, i) => (
    <div key={i} className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-500">"{testimonial.content}"</p>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1c4539] text-white">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
        <p className="max-w-[600px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Download our app today and experience the difference it can make for your farming operations.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <button className="bg-white text-green-500 hover:bg-indigo-100 btn btn-primary">
          <Download className="mr-2 h-4 w-4" />
          Download Now
        </button>
        <button className="border-white text-white hover:bg-indigo-400 btn btn-secondary">
          Contact Sales
        </button>
      </div>
    </div>
  </div>

  {/* Attention Text Section */}
  <div className="mt-12 text-center text-indigo-100">
    <p className="text-sm md:text-base">
      We comply with data privacy and all financial regulation laws of Rwanda. 
      Read more about our <a href="/terms-and-conditions" className="font-semibold text-white hover:text-indigo-200">Terms and Conditions</a>.
    </p>
  </div>
</section>

    </div>
  )
}
