import React from 'react'
import Navbar from '@/Components/navbar'

const people = [
  {
    name: 'Rudalph Gonsalves',
    title: 'Vasai, Mumbai',
    department: 'Maharashtra',
    email: 'gonsalvesrudalph@gmail.com',
    contact: '7249735828',
    group: 'A+',
    image:'https://i.pinimg.com/736x/60/71/d9/6071d9466ec2fe097af987934010851e--hot-men-ryan-oneal.jpg',
  },
  {
    name: 'Shruti Patil',
    title: 'Virar, Mumbai',
    department: 'Maharashtra',
    email: 'patilshruti7273@gmail.com.com',
    contact: '7030778747',
    group: 'AB+',
    image:'https://kottke.org/plus/misc/images/ai-faces-01.jpg',
  },
  {
    name: 'Siddhesh Pradhan',
    title: 'Borivali, Mumbai',
    department: 'Maharashtra',
    email: 'pradhansiddhesh@gmail.com',
    contact: '7249787473',
    group: 'B+',
    image:'https://tvwish.com/Img/Actor/67432.jpg',
  },
  {
    name: 'Valentina Correia',
    title: 'Virar, Mumbai',
    department: 'Maharashtra',
    email: 'correiavalentina@.com',
    contact: '8793820339',
    group: 'A+',
    image:'https://th.bing.com/th/id/OIP.o4-MWPvG_TDeVld6n8n3kgHaHa?w=768&h=768&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Bhushan Tikande',
    title: 'Vajreshwari, Mumbai',
    department: 'Maharashtra',
    email: 'bushantikhande@gmail.com',
    contact: '7030777249',
    group: 'AB+',
    image:'https://www.ccmmagazine.com/wp-content/uploads/2015/05/DanBremnes_Promo1_Warm_Texture.jpg',
  },
  {
    name: 'Sudhir Patil',
    title: 'Vajreshwari, Mumbai',
    department: 'Maharashtra',
    email: 'sudhirpatil001@gmail.com',
    contact: '9970851627',
    group: 'A+',
    image:'https://wallpaperaccess.com/full/5496283.jpg',
  },
  
]
const page = () => {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <div className='h-screen'>
            <Navbar />
          </div>
         

        <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-9">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Find Donars</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all blood donors. Contact them in case of you need their help.
            </p>
          </div>
          
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-black"
            type="text"
            placeholder="Serach"
          ></input>
       
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Register Yourself As Donar
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Blood Group
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Contact
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                       
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              <div className="text-sm text-gray-700">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.title}</div>
                          <div className="text-sm text-gray-700">{person.department}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.group}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.contact}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <button
                            type="button"
                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Available!
                        </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
          
        </div>
    </div>
  )
}

export default page