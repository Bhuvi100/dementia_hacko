import React from 'react'
import Navbar from '../components/Navbar'

const Puzzle = () => {
  return (
    <div>
        <Navbar />
       <div class="min-h-screen py-20 px-10 bg-gray-100">
        <div class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
            <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20" x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }">
                <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                    <a href='/jigsaw'>
                    <button>
                    <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                    <circle
                        class="text-gray-300"
                        stroke-width="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        />
                    <circle
                        class="text-blue-600"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    </svg>
                    <span class="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
                    </button>
                    </a>
                </div>
                <p class="ml-10 font-medium text-gray-600 sm:text-xl">Jigsaw Puzzle</p>
            </div>

            <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20" x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }">
                <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                    <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                    <circle
                        class="text-gray-300"
                        stroke-width="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        />
                    <circle
                        class="text-blue-600"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    </svg>
                    <span class="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
                </div>
                <p class="ml-10 font-medium text-gray-600 sm:text-xl">Card Games</p>
            </div>

            <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20" x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }">
                <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                    <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                    <circle
                        class="text-gray-300"
                        stroke-width="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        />
                    <circle
                        class="text-blue-600"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    </svg>
                    <span class="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
                </div>
                <p class="ml-10 font-medium text-gray-600 sm:text-xl">Trivia</p>
            </div>

            <div class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20" x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }">
                <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                    <svg class="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                    <circle
                        class="text-gray-300"
                        stroke-width="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        />
                    <circle
                        class="text-blue-600"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    </svg>
                    <span class="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
                </div>
                <p class="ml-10 font-medium text-gray-600 sm:text-xl">Bingo</p>
            </div>
            
        
        </div>
        </div>
    </div>
  )
}

export default Puzzle