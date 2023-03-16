import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {experience: Experience}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[900px] max-h-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 md:opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 md:h-32 md:w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map(tech => (
            <img
              alt={tech?.title}
              key={tech?._id}
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              src={urlFor(tech?.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400 
    scrollbar-thumb-[#F7AB0A]">
          {experience?.points?.map(point => (
            <li className="text-sm md:text-md" key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard