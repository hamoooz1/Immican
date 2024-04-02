"use client";
import {useRef} from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="mb-20 ">
      <motion.div ref={ref}
        className="flex items-center justify-between max-lg:bg-[#FFE066] bg-peach dark:bg-[#737373] lg:w-[1200px]  lg:rounded-[60px] p-7"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        }}
      >
        <div className="m-10" >
          <p className="text-2xl font-bold text-mission">Our Mission</p>
          <h3 className="text-subheader font-extrabold text-[34px] mb-5">
            At Immican.AI, we are on a dual mission.
          </h3>
          <p className="text-[20px] mb-10 font-light">
            We are committed to combatting fraud and alleviating the stress
            faced by immigrants during their settlement journey.
          </p>

          <p className="text-[20px] font-light max-lg:text-justify">
            Guided by our core values of Accessibility, Inclusion, and creating
            a safe space for marginalized communities, we tirelessly innovate
            and dedicate ourselves to making a positive impact. Our vision is to
            empower immigrants for success, fostering economic growth, and
            contributing to resilient, inclusive communities. At Immican.AI, our
            values drive us to eliminate systemic barriers, creating a world
            where opportunities are accessible to everyone, regardless of their
            background.
          </p>
        </div>
        <div className="h-0 w-0  lg:h-[650px] lg:min-w-[434px] md:mr-10">
          <Image
            src="/images/Canada.png"
            alt=""
            className=" mr-10 rounded-[50px]"
            height={650}
            width={434}
          />
        </div>

      </motion.div>
    </section>
  );
}

export default Mission;
