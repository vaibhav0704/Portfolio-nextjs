import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[480px] md:w-[600px] xl:w-[900px] max-h-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C560BAQGOcQ5RLlqiyQ/company-logo_200_200/0/1602007421941?e=1672272000&v=beta&t=2lT3VdSJ4-5GiriXIFhjYmICWMjTKvktAM3X06ZQrjM"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Intern at Agumentik</h4>
        <p className="font-bold text-2xl mt-1">Agumentik</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary PointsSummary</li>
          <li>Summary PointsSummary</li>
          <li>Summary PointsSummary</li>
          <li>Summary PointsSummary</li>
          <li>Summary PointsSummary</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard