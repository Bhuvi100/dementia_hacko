import React, { useState } from "react";
import "../App.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Navbar from "../components/Navbar";

const Jigsaw = () => {
	const [text, setText] = useState("Unpuzzle the pieces!!");
	
	const set = () => {
		setText("Congratulations!!");
	};
	
	return (
		<div>
            <Navbar />
            <div class="mt-2">
			<h2 className="tag">{text}</h2>
			<JigsawPuzzle
				imageSrc={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
				rows={3}
				columns={3}
				onSolved={set}
				className="jigsaw-puzzle"
			/>
            </div>
		</div>
	);
}

export default Jigsaw;
