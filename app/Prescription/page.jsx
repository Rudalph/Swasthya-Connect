import React from 'react'
import { Home, ChevronRight, ShoppingCart } from 'lucide-react'
import Navbar from '@/Components/navbar'
import { FaFilePrescription } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link';

const steps = ['Personal Information', 'Payment Method', 'Confirmation']

export default function page() {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Navbar />

    <div className="mx-auto w-full max-w-7xl py-10">
      <div className="mx-auto my-4 max-w-2xl md:my-6">
        {/* breadcrumb */}
        
        {/* Form */}
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow-2xl border-black border-2">
          <div className="mb-4 flex items-center rounded-lg py-2">
            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
            <FaFilePrescription size={30} />
            </div>
            <div className="flex flex-1">
              <p className="text-sm font-medium">
                You have <strong>2</strong> tablets prescribed by <strong>Dr. Mahesh Jadhav</strong>
              </p>
            </div>
            <div className="mr-2 rounded-full bg-gray-100  p-2 text-black">
              <FaUserDoctor size={30} />
            </div>
          </div>

          <p className="text-lg font-bold text-gray-900">Personal Info</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Name: Mr. Rudalph Gonsalves
              </label>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Age: 20 years
              </label>
             
            </div>
            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email Address: gonsalvesrudalph@gmail.com
                </label>
               
              </div>
            </div>
          </div>


          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Contact: 7249735828
              </label>
            </div>
            
            <div className="col-span-2 grid">
              
            </div>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900">Medical Info</p>
            <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Tab 1: Neomycine Acetodide
              </label>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Dose: 2 tablets /day
              </label>
             
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Tab 2: Micozonal DWD 
              </label>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Dose: 3 tablets /day
              </label>
             
            </div>
           
           </div>
          </div>
          <div className="col-span-2 grid mt-10 justify-center">
          <Link href="/Medicals"><button
                type="button"
                className="rounded-full border-2 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-60 flex justify-center align-middle"
                >
                Check With Nearby Medicals
                </button></Link>
            </div>

        </div>
        
        
      </div>
      
    </div>

    </div>
    </div>
    
  )
}
