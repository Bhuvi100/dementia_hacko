import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";

const HomeLayout = (props) => {
	
	
	return (
		<div>
            <Navbar isGuardian={props.isGuardian} />
            {/* <div class="bg-fixed h-screen object-fit"  style={{ background: "url('/assets/homelayout.png')" }}> */}

            {/* </div> */}
            <img alt="gallery" class="object-fit object-center rounded-lg h-screen"
            src="/assets/homelayout.png"/>
		</div>
	);
}

export default HomeLayout;
