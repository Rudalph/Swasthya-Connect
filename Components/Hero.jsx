'use client'

import React from 'react'
import Typed from 'typed.js'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { useEffect, useRef } from 'react';



const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Swasthya Connect',
                'आपके स्वास्थ्य का संबंध',
                'An Integrated Healthcare Management System'
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


  return (
    <>
    <div className="relative w-full bg-white">
     
      <div className="relative isolate z-0 px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Swasthya Connect.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An Integrated Healthcare Management System. We aim towards making healthcare better and efficient for all.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Docs
              </button>
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
       <div className="text navbar-text text-2xl sm:text-5xl lg:text-5xl tracking-wide flex flex-col sm:flex-row justify-center p-5 sm:p-10 mt-5 mb-5 text-gray-900 ">
          <div className="typing mb-5 sm:mb-0 sm:mr-5">
            <span ref={typingRef} />
          </div>
        </div>
        <section className="relative overflow-hidden py-3">
          <div className='flex justify-center'>
              <p className="mb-4  text-base font-medium"><b>Swasthya Connect</b></p>
          </div>
          <div className='flex justify-center '>
              <p className="text-sm text-gray-600">
                    &copy; Copyright 2024. All Rights Reserved by Swasthya Connect.
              </p>
          </div>
      </section>
    </div>
    </>
  )
}
