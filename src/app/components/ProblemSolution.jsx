"use client";
//IMPORTs
import {useRef} from "react";
import InfoCard from "./InfoCard";
import problemData from "../../data/problemData.json";
import solutionData from "../../data/solutionData.json";
import { motion, useInView } from "framer-motion";


//COMPONENT DECLARATION
function ProblemSolution() {
  const problem = useRef(null);
  const solution = useRef(null);
  const problemInView = useInView(problem, { once: true });
  const solutionInView = useInView(solution, { once: true });


  // COMPONENT RETURN
  return (
    
    <section className="bg-background_2 dark:bg-none bg-no-repeat bg-bottom w-full flex flex-col items-center ">
      <h2  className=" font-bold text-4xl pl-10 pr-10 text-center">The problem immigrants face </h2>
      <div ref={problem} className="flex mxlg:flex-col mxlg:content-center justify-between lg:w-[1200px] m-10 ">
        {problemData.map((card, index) => {
          return (
      
          <motion.div
          key={card.id}
          style={{
            transform: problemInView ? "none" : "translateY(200px)",
            opacity: problemInView ? 1 : 0,
            transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index * 4}s`,
          }}>

          <InfoCard  data={card} />
          </motion.div>
          
      
          );
          
        })}
      </div>
      <h2  className=" font-bold text-4xl pl-10 pr-10 text-black text-center">Is the problem we solve</h2>
      <div ref={solution} className="flex mxlg:flex-col mxlg:content-center justify-between lg:w-[1200px] m-10 ">
        {solutionData.map((card, index) => {
                    return (
      
                      <motion.div
                      key={card.id}
                      style={{
                        transform: solutionInView ? "none" : "translateY(200px)",
                        opacity: solutionInView ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${index*4}s`,
                      }}>
            
                      <InfoCard  data={card} />
                      </motion.div>
                      
                  
                      );
          
        })}
      </div>
    </section>
  );
}

export default ProblemSolution;