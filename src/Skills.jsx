function Skills() {
	return (
		<div className="flex flex-col justify-between">
			<ul>
				<li className="flex items-center gap-2">
					{/* <hr className="w-12" /> */}
					<p className="text-2xl">Skills.</p>
				</li>
			</ul>
			<ul className="flex w-full">
				<li className="flex-1 text-center p-2 bg-[#2e234c]">HTML</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">CSS</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">JavaScript</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">MongoDB</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">Express</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">React</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">Node</li>
			</ul>
		</div>
	);
}

export default Skills;
