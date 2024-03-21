import React from 'react'
import { Star, ChevronDown } from 'lucide-react'
import Navbar from '@/Components/navbar'
import { FiPhoneCall } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function page()  {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <div className='h-screen'>
            <Navbar />
          </div>
         

      <section className='flex-1 overflow-y-auto  p-10'>
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://th.bing.com/th/id/OIP.srOi0rWyzaTxy08bryY9qwHaFG?rs=1&pid=ImgDetMain"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Hospital 1</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Carmel Hospital</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Visit our hospital for compassionate and expert healthcare. Our skilled team is dedicated to your well-being. With modern facilities 
            and a focus on patient comfort,
            we prioritize your health and recovery. Trust in our commitment to excellent medical services.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Departments Available</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Surgery</option>
                    <option>Medecine</option>
                    <option>Orthopadics</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiPhoneCall/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiGlobe /></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiInstagram/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiLinkedin/></span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore.
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://th.bing.com/th/id/OIP.rf_UTwDKG7XALHaGmsYesQHaFj?rs=1&pid=ImgDetMain"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Hospital 2</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Holy Family Hospital</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Discover exceptional healthcare at City Health Center. Our experienced medical professionals prioritize your health and recovery, 
            offering modern facilities and a patient-focused approach. 
            Trust in our dedication to providing high-quality medical services for your well-being.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Available Departments</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Surgery</option>
                    <option>Medicine</option>
                    <option>Orthopadics</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiPhoneCall/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiGlobe /></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiInstagram/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiLinkedin/></span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore.
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://s.yimg.com/fz/api/res/1.2/ZT2giccxCd5pOv2Qxwyb9w--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00Mjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00Mzg-/https://s.yimg.com/bj/bd91/bd9152a33c019d9030ddc0727702a1c9.jpg"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Hospital 3</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Sanjay Patel Hospital</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Experience top-tier healthcare at Wellness Medical Center. Our devoted team is committed to your health, 
            with a focus on expert care and patient comfort. Trust in our state-of-the-art facilities and dedication 
            to providing excellent medical services for your overall well-being.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Available Departments</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Surgery</option>
                    <option>Medecine</option>
                    <option>Orthapadics</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiPhoneCall/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiGlobe /></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiInstagram/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiLinkedin/></span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore.
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://th.bing.com/th/id/OIP.pP9RJlnUj8nzNrWXR_6Q4gHaHa?rs=1&pid=ImgDetMain"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Hospital 4</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Ujala Hospital</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Visit our hospital for compassionate and expert healthcare. Our skilled team is dedicated to your well-being. With modern facilities 
            and a focus on patient comfort,
            we prioritize your health and recovery. Trust in our commitment to excellent medical services.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
             
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Available Departments</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Medicine</option>
                    <option>Surgery</option>
                    <option>Orthopadics</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
            <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiPhoneCall/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiGlobe /></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiInstagram/></span>
              <span className="title-font text-2xl font-bold text-gray-900 flex items-center justify-evenly"><FiLinkedin/></span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore.
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
          
        </div>
    </div>
    
  )
}
