import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";

const Schedule = () => {
	
	
	return (
		<div>
            <Navbar />
            
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Time
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Task
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr class="border-b bg-blue-100 border-blue-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Primary
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-purple-100 border-purple-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Secondary
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-green-100 border-green-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Success
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-red-100 border-red-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Danger
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-yellow-100 border-yellow-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Warning
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-indigo-100 border-indigo-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Info
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-gray-50 border-gray-200">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Light
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
            <tr class="border-b bg-gray-800 boder-gray-900">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                Dark
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td>
              <div class="flex items-center ml-12">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-500 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    
</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
            
		</div>
	);
}

export default Schedule;