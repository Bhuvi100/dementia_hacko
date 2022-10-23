import React from 'react'

const CaretakerCard = () => {
  return (
    <div>
    <h1 class="mt-2 text-center font-bold py-5 text-2xl">Care Takers Availability</h1>
    <div class="flex font-medium items-center justify-center mx-2">
    <div class="w-36 mx-2 bg-[#6943a4] rounded-2xl px-2 py-2 shadow-lg">
        <div class="mt-1 w-fit mx-auto">
            <img src="/assets/user.png" class="rounded-full w-24" />
        </div>

        <div class="mt-1">
            <h2 class="text-white text-base text-center">Jonathan</h2>
        </div>
        <p class="text-emerald-300 text-sm text-center" >
            Active
        </p>
    </div>
    <div class="w-36 mx-2 bg-[#6943a4] rounded-2xl px-2 py-2 shadow-lg">
        <div class="mt-1 w-fit mx-auto">
            <img src="/assets/user.png" class="rounded-full w-24" />
        </div>

        <div class="mt-1">
            <h2 class="text-white text-base text-center">Katy Dor</h2>
        </div>
        <p class="text-emerald-300 text-sm text-center" >
            Inactive
        </p>
    </div>
    <div class="w-36 mx-2 bg-[#6943a4] rounded-2xl px-2 py-2 shadow-lg">
        <div class="mt-1 w-fit mx-auto">
            <img src="/assets/user.png" class="rounded-full w-24" />
        </div>

        <div class="mt-1">
            <h2 class="text-white text-base text-center">Simon</h2>
        </div>
        <p class="text-emerald-300 text-sm text-center" >
            Inactive
        </p>
    </div>
    
    </div>
    </div>
  )
}

export default CaretakerCard