import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center md:space-y-8">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>

      <div className="flex flex-col space-y-4 md:space-y-16">
        <h4 className="text-2xl md:text-4xl font-semibold text-center mb-10">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>

        <div className="space-y-5 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 e-7 animate-pulse" />
            <p className="text-2xl">+918885417955</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 e-7 animate-pulse" />
            <p className="text-2xl">vaibhavsaraf.08@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#F7AB0A] h-7 e-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>

        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="text" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput" />
          <button 
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe