"use client"
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {CanvasRevealEffect} from "./ui/CanvasRevealEffect";


const Approach = () => {
  return (
    <section className="w-full py-20">
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Strategic Planning & Research" icon={<AceternityIcon order="phase 1" />}
        discription="Every successful project begins with understanding the requirements. I prioritize clear communication with clients and thorough research to create a solid foundation for development. This step ensures that the end product aligns perfectly with your vision and goals"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Efficient Development Process" icon={<AceternityIcon order="phase 2"/>}
        discription="I follow an agile approach to development, breaking down complex tasks into manageable milestones. Using the MERN stack, I ensure fast, responsive, and scalable applications. I focus on writing clean, maintainable code that follows best practices."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
         
        </Card>
        <Card title="Quality Assurance & Deployment" icon={<AceternityIcon order="phase 3" />}
        discription="I don't just build; I make sure everything works perfectly. Comprehensive testing, including unit tests and integration tests, ensures your app is bug-free and ready for launch. Once everything is flawless, I deploy the application to the cloud for optimal performance."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  discription
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  discription: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className=" text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: '#e4ecff'}}>
          {discription}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
  <div>
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1   text-white backdrop-blur-3xl text-2xl font-bold ">
    {order}
  </span>
</button>
  </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach