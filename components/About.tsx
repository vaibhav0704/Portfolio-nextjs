import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}

    className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img 
        initial={{
          x:-200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-mediumSquareAt3X.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 
        md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <motion.div 
      initial={{
        x: 200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here's a{" "} 
        <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} 
        background</h4>

        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ut lectus sodales pulvinar. Pellentesque egestas interdum lacinia. Vivamus dictum pellentesque orci vitae euismod. Aenean cursus tellus velit, a sagittis diam ullamcorper eget. Morbi pharetra convallis feugiat. Donec pharetra ligula auctor, venenatis justo a, finibus nulla. Fusce vitae accumsan purus.

          Proin porta viverra metus, nec dictum ex rutrum volutpat. In eleifend arcu nec congue sollicitudin. Praesent dolor purus, ornare sed tellus venenatis, blandit commodo arcu. In sagittis massa vitae neque condimentum, sit amet iaculis eros gravida. Pellentesque venenatis urna. 
        </p>

      </motion.div>
    </motion.div>
  )
}