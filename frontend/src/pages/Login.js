import React from 'react'

const Login = () => {
  return (
    <div class="coutainer m-20 mx-auto">
            
        <div class="flex content-start flex-wrap ">
            <div class="w-1/3 p-2">
            </div>
            <div class="w-1/3 p-2">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <p class="text-6xl mb-10">Login</p>
                    <div class="mb-4">
                    <label class="inline text-sm font-bold mb-2">Username</label>
                    <input class="border rounded w-full py-2 px-3 text-gray-700" id="username" type="text" placeholder="Username"/>
                    </div>
                    
                    <div class="mb-6">
                    <label class="inline text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
                    
                    </div>
                    <div class="flex items-center justify-between">
                    
                    <div class="w-1/3 p-2"></div>
                    <div class="w-1/3 p-2">
                    <button class="bg-purple-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    </div>
                    <div class="w-1/3 p-2"></div>
            </div>
            </form>
            </div>
            <div class="w-1/3 p-2">
            </div>
        </div>
 
  
            
    </div>
  )
}

export default Login
