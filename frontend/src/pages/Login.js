import React from 'react'

const Login = () => {
  return (
    <div>
    <section class="pt-28 h-screen"  style={{ background: "url('/assets/bg.png')" }}>
    <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
            <div
            class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg py-16 px-10 text-center sm:px-12 md:px-[60px]"
            >
            <div class="mb-10 text-center md:mb-16">
                <a
                href="#"
                class="mx-auto inline-block max-w-[160px]"
                >
                <img
                    src="/assets/logo.png"
                    alt="logo"
                />
                </a>
            </div>
            <form>
                <div class="mb-6">
                <input
                    type="text"
                    placeholder="Email"
                    class="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                </div>
                <div class="mb-5">
                <input
                    type="submit"
                    value="Sign In"
                    class="border-primary w-full cursor-pointer rounded-md border py-3 px-5 text-base text-white"
                    style={{ background:"#6943a4" }}
                    />
                </div>
            </form>
            <a
                href="#"
                class="mb-2 inline-block text-base text-[#adadad] hover:text-primary">
                Forget Password?
            </a>
            <br />

            <a
                href="#"
                class="mb-2 inline-block text-base text-[#adadad] hover:text-primary">
                Don't have an account ? Register here
            </a>

            </div>
        </div>
        </div>
    </div>
    </section>
</div>
  )
}

export default Login
