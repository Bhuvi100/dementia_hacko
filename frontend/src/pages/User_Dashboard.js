import React from 'react'
import Navbar from './Navbar.js'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-28">
      <div class="p-5 bg-slate-300 ml-8 rounded-lg h-32">
      <p class="text-center">
        <a href='/forum'>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        </button>
        </a>
      </p>
      <h2 class="font-semibold text-lg text-center text-gray-800">
        Community Forum
      </h2>
      </div>

      <div class="p-5 bg-slate-300 mr-8 rounded-lg h-32">
      <p class="text-center">
      <a href='/puzzle'>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
</svg>
        </button>
      </a>
      </p>
      <h2 class="font-semibold text-lg text-center text-gray-800">
        Funding
      </h2>
      </div>

      <div class="p-5 bg-slate-300 ml-8 rounded-lg h-32 md:content-center">
      <p class="text-center">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
        <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
        </svg>
        </button>
      </p>
      <h2 class="font-semibold text-lg text-center text-gray-800">
        Awareness progress
      </h2>
      </div>
      
      
      </div>
      <div class="m-7">
         <button class="transition duration-500 ease-in-out bg-blue-500 hover:bg-purple-500 transform hover:-translate-y-1 hover:scale-110 ... w-full h-12">
  Hover me
</button>
      </div>


    </div>
    
  )
}

export default Dashboard
