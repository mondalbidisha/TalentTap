import { Link } from "gatsby"
import * as React from "react"
import Logo from "../../assets/Logo"

const ChooseYourPlan = () => {
  return (
    <div className="lg:w-1/2 w-full relative z-20">
      {/* <Logo className="z-10 pointer-events-none md:h-96 md:w-96 absolute w-full -ml-16 -mt-24 opacity-5 -rotate-12" /> */}
      <div className="relative z-20">
        <p className="text-sm leading-4 uppercase text-gray-600">
          Choose your plan
        </p>
        <h2 className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
          Our pricing plan
        </h2>
        <p
          role="contentinfo"
          className="text-base leading-5 mt-5 text-gray-600"
        >
          We’re dedicated to making TalentTap the ultimate platform for preparing for your 
          next interview or finding your ideal candidate. We eagerly await your feedback.
        </p>
        <p className="text-sm opacity-70 italic mt-2 mb-10">
          *Disclaimer: All prices are hypothetical and for demonstration purposes only. 
          This product is not currently available for purchase, and future prices may vary.
        </p>

        <Link
          to="/dashboard"
          className="uppercase bg-orange-500 focus:ring-orange-500 focus:outline-none text-semibold text-lg text-white rounded-lg py-4 px-6"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default ChooseYourPlan