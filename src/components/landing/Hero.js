import * as React from "react"
import { Link } from "gatsby"
import { useAuth } from "../../context/auth-context"
import { ArrowRightIcon } from "@heroicons/react/outline"
import FlowDiagram from "./FlowDiagram"
import flowDiagramElements from "../../data/flowDiagramElements.json"

const Hero = () => {
  const { user } = useAuth()
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-800 text-white relative">
      <div className="grid md:grid-cols-2 px-4 md:px-4">
        <div className="md:py-18 space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-orange-400">Interviews</span> are like{" "}
            <span className="text-orange-400">cakewalk</span>.
          </h1>
          <p>
            Interviews can be challenging, whether you're an applicant or an interviewer. 
            Powered by AI, TalentTap provides all the necessary tools to turn interviews into a 
            positive experience. Make your next interview count.
          </p>
          <Link to={user ? "/dashboard" : "/login"} className="inline-block">
            <div className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-xl mt-4 flex items-center space-x-2">
              <p>{user ? "Your Dashboard" : "Get started"}</p>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </Link>
        </div>
        <div className="w-full h-96 mt-12 md:mt-0 md:h-full pointer-events-none md:-mr-12">
          <FlowDiagram elements={flowDiagramElements} />
        </div>
      </div>
    </div>
  )
}

export default Hero