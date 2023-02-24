import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {

  const projects = [1,2,3,4,5];

  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
    justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400 
    scrollbar-thumb-[#F7AB0A]">
        {projects.map((project, i) => (
          <div 
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
            p-8 md:p-44 h-screen"
            key={i}
          >

            <motion.img 
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-52 md:h-96 object-cover"
              src="https://cdn.pocket-lint.com/r/s/1201x/assets/images/150925-apps-feature-what-is-slack-and-how-does-it-work-plus-plenty-of-slack-tips-and-tricks-image1-m1j0yhalq4.jpg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} of {projects.length}:</span>{" "}
                Slack clone
              </h4>

              <p className="text-sm md:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci urna, lacinia quis maximus at, feugiat a leo. Nam dignissim ullamcorper diam ac aliquet. Donec tincidunt tincidunt volutpat. Proin massa justo, porta non molestie nec, feugiat a neque. In hac habitasse platea dictumst. Aenean sed metus id odio dapibus gravida. 
              </p>
            </div>
          </div>
        ))}
      </div> 
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>

  )
}

export default Projects