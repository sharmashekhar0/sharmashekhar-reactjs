function Bio() {
	return (
		<div className="flex items-center h-96">
			<div className="w-1/2 flex justify-center items-center">
				<div className="flex flex-col">
					<p className="text-2xl">Hey!</p>
					<p className="text-5xl">I'm</p>
					<p className="text-7xl font-extrabold">Shekhar</p>
					<p className="text-7xl font-extrabold">Sharma</p>
					{/* <p className="text-xl text-center">Full Stack Developer</p> */}
				</div>
			</div>
			<div className="flex justify-center items-center h-full w-1/2">
				<img
					className="h-3/4 w-3/4 rounded-full"
					src="https://images.pexels.com/photos/5983608/pexels-photo-5983608.jpeg"
					alt="My Photo"
				/>
			</div>
		</div>
	);
}

export default Bio;
