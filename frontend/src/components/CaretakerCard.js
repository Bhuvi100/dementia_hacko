import React from 'react'

const CaretakerCard = () => {
  return (
    <div>
    <h1 class="mt-2 text-center font-bold py-5 text-2xl">Care Takers Status</h1>
    <div class="flex font-medium items-center justify-center">
    <div class="w-36 mx-auto bg-[#6943a4] rounded-2xl px-8 py-6 shadow-lg">
        <div class="mt-1 w-fit mx-auto">
            <img src="/assets/user.png" class="rounded-full w-28 " />
        </div>

        <div class="mt-1">
            <h2 class="text-white text-base text-center">Jonathan</h2>
        </div>
        <p class="text-emerald-300 text-sm text-center" >
            Active
        </p>
    </div>
    <div class="w-36 mx-auto bg-[#6943a4] rounded-2xl px-8 py-6 shadow-lg">
        <div class="mt-1 w-fit mx-auto">
            <img src="/assets/user.png" class="rounded-full w-28 " />
        </div>

        <div class="mt-1">
            <h2 class="text-white text-base text-center">Katy D'Or</h2>
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