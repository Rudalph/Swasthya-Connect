import React from 'react'
import Navbar from '@/Components/navbar'
import { X } from 'lucide-react'
import { FcCellPhone } from "react-icons/fc";
import { FcVoicemail } from "react-icons/fc";


const products = [
    {
      id: 1,
      name: 'Blood Count (CBC)',
      price: '₹500',
      timing: '8:00 am to 11:00 am',
      doctor: 'Dr. Mahesh Patil',
      rating: '4.5 out of 5',
      imageSrc:
        'https://static.vecteezy.com/system/resources/previews/014/996/983/original/blood-test-tube-icon-isometric-medical-health-vector.jpg',
    },
    {
      id: 2,
      name: 'Lipid Profile Test (LPT)',
      price: '₹600',
      timing: '9:00 am to 01:00 am',
      doctor: 'Dr.Sanjana Jadhav',
      rating: '4 out of 5',
      imageSrc:
        'https://biocityhealthcare.com/wp-content/uploads/2023/02/lipid-test.jpg',
    },
    {
      id: 3,
      name: 'Liver Fuction Test (LFT)',
      price: '₹800',
      timing: '9:00 am to 01:00 am',
      doctor: 'Dr.Rahul Sharma',
      rating: '3 out of 5',
      imageSrc:
        'https://th.bing.com/th/id/OIP.zu4OxoPz0qJVIoXmGyqbkgHaE8?rs=1&pid=ImgDetMain',
    },
  ]


  const products1 = [
    {
      id: 1,
      name: 'Blood Count (CBC)',
      price: '₹500',
      timing: '8:00 am to 11:00 am',
      doctor: 'Dr. Mahesh Patil',
      rating: '4.5 out of 5',
      imageSrc:
        'https://static.vecteezy.com/system/resources/previews/014/996/983/original/blood-test-tube-icon-isometric-medical-health-vector.jpg',
    },
    {
      id: 2,
      name: 'Lipid Profile Test (LPT)',
      price: '₹600',
      timing: '9:00 am to 01:00 am',
      doctor: 'Dr.Sanjana Jadhav',
      rating: '4 out of 5',
      imageSrc:
        'https://biocityhealthcare.com/wp-content/uploads/2023/02/lipid-test.jpg',
    },
    {
      id: 3,
      name: 'Liver Fuction Test (LFT)',
      price: '₹800',
      timing: '9:00 am to 01:00 am',
      doctor: 'Dr.Rahul Sharma',
      rating: '3 out of 5',
      imageSrc:
        'https://th.bing.com/th/id/OIP.zu4OxoPz0qJVIoXmGyqbkgHaE8?rs=1&pid=ImgDetMain',
    },
  ]
  


export default function page()  {
  return (
    <div>
      {/* Sidebar */}
      <div className='h-screen fixed'>
        <Navbar />
      </div>

      {/* Content */}
      <section className='flex-1 overflow-y-auto p-10 ml-64'> {/* Adjust ml-64 to match the width of your sidebar */}
        <div className="mx-auto my-4 max-w-4xl md:my-6">
        <div className="mx-auto my-4 max-w-4xl md:my-6">
      <div className="overflow-hidden rounded-xl border border-black shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-cover"
                          src={product.imageSrc}
                          alt={product.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {product.doctor}
                          </p>
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-600">{product.timing}</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {product.rating}
                          </span>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Explore Nidan Diagnostics Lab
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="fontmedium mt-3 text-sm text-gray-700 flex"><FcCellPhone size={25}/>: <b>+91 7249735828</b></p>
                  <p className="fontmedium mt-3 text-sm text-gray-700 flex"><FcVoicemail size={25}/>: <b>nidandiagnostic@gmail.com</b></p>
                  <button
                    type="button"
                    className="mt-4 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Book Appointment
                  </button>
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Address Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Gandhi Marg</p>
                  <p className="text-xs font-medium text-gray-700">Vasai pin: 401 203</p>
                  <p className="text-xs font-medium text-gray-700">Mumbai Maharashtra</p>
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Ask a Querry</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Contact our support staff in case of you need help</p>
                  <button
                    type="button"
                    className="mt-6 rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Contact support staff
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto my-4 max-w-4xl md:my-6">
        <div className="mx-auto my-4 max-w-4xl md:my-6">
      <div className="overflow-hidden rounded-xl border border-black shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {products1.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-cover"
                          src={product.imageSrc}
                          alt={product.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {product.doctor}
                          </p>
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-600">{product.timing}</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {product.rating}
                          </span>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Explore Nidan Diagnostics Lab
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="fontmedium mt-3 text-sm text-gray-700 flex"><FcCellPhone size={25}/>: <b>+91 7249735828</b></p>
                  <p className="fontmedium mt-3 text-sm text-gray-700 flex"><FcVoicemail size={25}/>: <b>nidandiagnostic@gmail.com</b></p>
                  <button
                    type="button"
                    className="mt-4 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Book Appointment
                  </button>
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Address Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Gandhi Marg</p>
                  <p className="text-xs font-medium text-gray-700">Vasai pin: 401 203</p>
                  <p className="text-xs font-medium text-gray-700">Mumbai Maharashtra</p>
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Ask a Querry</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Contact our support staff in case of you need help</p>
                  <button
                    type="button"
                    className="mt-6 rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Contact support staff
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
    </div>
  )
}
