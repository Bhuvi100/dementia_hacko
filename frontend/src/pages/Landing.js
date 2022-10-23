import React from 'react'

const Landing = () => {
  return (
    <div>
    <section class="pt-24 h-screen"  style={{ background: "url('/assets/bg.png')" }}>
    <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
            <div
            class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg py-16 px-10 text-center sm:px-12 md:px-[60px]"
            >
            <div class="mb-5 text-center md:mb-16">

                <img
                    src="/assets/logo.png"
                    alt="logo"
                />
            </div>
            <h1 class="text-5xl font-bold font-serif italic">Demen Care</h1>
            <span class="mt-4">Remember the Forgotten</span>
            <div class="mt-4 font-semibold font-3xl text-purple-900">
              <a href='/login'>
                Get Started
              </a>
            </div>
    </div>
  </div>
  </div>
  </div>
  </section>
  </div>
  )
}

export default Landing