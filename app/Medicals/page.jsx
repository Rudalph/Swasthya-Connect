import React from 'react'
import Navbar from '@/Components/navbar'
import { FaLocationDot } from "react-icons/fa6";


export default function page() {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Navbar />

          <div className='flex flex-col flex-1 overflow-hidden'>
          <div className="mx-auto grid w-full max-w-5xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 flex-1 overflow-y-auto  p-10">
            
            <div className="rounded-md border hover:shadow-lg">
            <img
                src="https://www.themonarchenterprises.com/wp-content/uploads/2021/09/1.jpg"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">Wellness Forever</h1>
                <p className="flex mt-3 text-sm text-gray-600">
                <FaLocationDot size={25} className='mr-2 text-rose-700'/> Shop No. 10 Kiran Marg Opp Hanuman Mandir Mira Road Mumbai Maharashtra 
                </p>
                <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Neomycine Acetodide
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Micozonal DWD
                </span>
               
                </div>
                <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold text-green-500">Available!</span>
                </div>
                <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold"> Get : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 110
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 150
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                     Free Delivery
                </span>
                </div>
                <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                 Home Delivery
                </button>
            </div>
            </div>




            <div className="rounded-md border hover:shadow-lg">
            <img
                src="https://content.jdmagicbox.com/comp/pune/b1/020pxx20.xx20.160615141153.r8b1/catalogue/all-well-medical-shivane-khadakwasla-pune-chemists-31jpbr5jls.jpg?clr=#412533"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">All Well Medical</h1>
                <p className="flex mt-3 text-sm text-gray-600">
                <FaLocationDot size={25} className='mr-2 text-rose-700'/> Shop No. 105 Gandhi Marg Opp Shiv Mandir Mira Road Mumbai Maharashtra 
                </p>
                <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Neomycine Acetodide
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Micozonal DWD
                </span>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold text-green-500">Available!</span>
                </div>
                <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold"> Get : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 110
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 150
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                     Free Delivery
                </span>
                </div>
                <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                Home Delivery
                </button>
            </div>
            </div>




            <div className="rounded-md border hover:shadow-lg">
            <img
                src="https://th.bing.com/th/id/R.bbb3997266e339b962088a8905db6036?rik=2wTtT2%2b5HqMcYQ&riu=http%3a%2f%2fnoblemedicals.com%2fImages%2fprabhadevi_img1_up.jpg&ehk=NBcJX1sR6px1ZWW%2fGhkOH44TffouolmvIv93W5rQ8AM%3d&risl=&pid=ImgRaw&r=0"
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">Nobel Medicals</h1>
                <p className="flex mt-3 text-sm text-gray-600">
                <FaLocationDot size={25} className='mr-2 text-rose-700'/> Shop No. 118 Guru  Marg Opp Karari Mill  Mira Road Mumbai Maharashtra 
                </p>
                <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Neomycine Acetodide
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    Micozonal DWD
                </span>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold text-rose-700">Unavailable!</span>
                </div>
                <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold"> Get : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 110
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    Rs 150
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                     Free Delivery
                </span>
                </div>
                <button disabled
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-not-allowed"
                >
                Home Delivery
                </button>
            </div>
            </div>
        </div>


        
          </div>

        </div>
    </div>
    
  )
}
