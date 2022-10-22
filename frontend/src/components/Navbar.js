import React, { useState } from 'react'

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen ] = useState(false)

  return (

    <div>
    <div class="h-18 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-300">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-12 sm:h-9" alt="Flowbite Logo" />
        <div class="flex items-center md:order-2">
            <button type="button" onClick={ ()=> setIsProfileOpen(!isProfileOpen) }  class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img class="w-14 h-18 rounded-full" src="/assets/user.png" alt="" />
            </button>
            <div class={" z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 " + (isProfileOpen?"": "hidden" )} id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: "absolute",  inset: "30px 0px auto auto", transform: "translate3d(0px, 410.4px, 0px)S" }}>
                <div class="py-3 px-4">
                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul class="py-1" aria-labelledby="user-menu-button">
                <li>
                    <a href="/dashboard" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                </ul>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar