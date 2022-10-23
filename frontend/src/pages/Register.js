import React from 'react'

const Register = () => {
  return (
     <div class="coutainer mx-auto">
            <div class="flex content-start flex-wrap" >
                <div class="w-1/4 p-2"></div>
                <div class="w-1/2 p-2">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 class="text-lg font-bold">Registeration</h1>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Name</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="name" type="text" placeholder="Name"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Age</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="age" type="number" placeholder="Age"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold m-4 mb-2">Gender</label>
                                    <label class="inline text-sm font-bold mb-2">Male</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="male" type="radio"/>
                                    <label class="inline text-sm font-bold mb-2">Female</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="female" type="radio"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Email</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="mail" type="email" placeholder="Email"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Phone no.</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="phone" type="phone" placeholder="Phone no."/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Address</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="address" type="textarea"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Name of Dementia</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="name_of_patient" type="text" placeholder="Name"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Relation to the patient</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="relation_to_patient" type="text" placeholder="Name"/>
                            </div>
                            <div class="mb-4">
                                    <label class="inline text-sm font-bold mb-2">Upload Medical Records</label>
                                    <input class="border rounded m-4 py-2 px-3 text-gray-700" id="med_file" type="file"/>
                            </div>
                                <button class="bg-purple-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Register
                                </button>
                    </form>
                </div>
                <div class="w-1/4 p-2"></div>

            </div>
        </div>
  )
}

export default Register
