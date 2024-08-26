import React from 'react'
import Image from "next/image";

export default function InstitueCard2({name}) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
       
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold cursor-pointer">{name}</div>
          <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          {/* <div className="mt-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none">Read More</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2">Share</button>
          </div> */}
        </div>
        <div className="md:flex-shrink-0">
          <Image width={200} height={200} className="h-48 w-full  md:w-48" src="/tree-736885_640.jpg" alt="Image"/>
        </div>
      </div>
    </div>
  )
}
