import React from 'react'
import { motion } from 'framer-motion';
import SkillTab from './Skill';
import { Skill } from '../typings';

type Props = { skills: Skill[] }

function Skills({ skills }: Props) {
  return (
    <motion.div 
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    
    className="flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="absolute top-50 grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length/2)?.map(skill => (
          <SkillTab key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length/2, skills.length)?.map(skill => (
          <SkillTab key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills