import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";

const Action = (props) => {
	
	
	return (
		<div>
            <Navbar isGuardian={props.isGuardian}/>
            <section class="overflow-hidden text-gray-700 ">
  <div class="container mt-10 px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300" >
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
        </div>
      </div>
    </div>
  </div>
</section>
		</div>
	);
}

export default Action;
