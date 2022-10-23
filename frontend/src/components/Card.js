import React from 'react'

const Card = () => {
  return (
    <div>
        <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 p-4">
        <div>
        <div class="max-w-sm mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div class="flex flex-col">
                <div class="flex-grow p-5">
                    <div class="flex justify-between items-start">
                        <header>
                            <div class="flex mb-2">
                                <a class="relative inline-flex items-start mr-5" href="#0">
                                    <img class="rounded-full" src="/assets/user.png" width="64" height="64" alt="User 01" />
                                </a>
                                <div class="mt-1 pr-1">
                                    <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                        <h2 class="text-xl leading-snug justify-center font-semibold">Dominik McNeail</h2>
                                    </a>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div class="mt-2">
                        <div class="text-sm">Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Card