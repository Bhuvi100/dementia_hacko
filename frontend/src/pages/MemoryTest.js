import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MemoryTest = () => {
	
	
	return (
		<div>
            <Navbar />
            <Carousel>
                <div>
                    <img src="/assets/memory/memtest1.jpg" />
                </div>
                <div>
                    <img src="/assets/memory/memtest2.jpg" />
                </div>
                <div>
                    <img src="/assets/memory/memtest3.jpg" />
                </div>
            </Carousel>
            <button className="bg-purple-700 p-3 ml-80 focus:bg-green-500 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

            </button>
		</div>
	);
}

export default MemoryTest;
