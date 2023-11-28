function Technologies() {
	return (
		<div className="flex flex-col justify-between">
			<ul>
				<li className="flex items-center gap-2">
					{/* <hr className="w-12" /> */}
					<p className="text-2xl">Technologies.</p>
				</li>
			</ul>
			<ul className="flex w-full">
				<li className="flex-1 text-center p-2 bg-[#2e234c]">MongoDB</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">Postman</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">MySQL</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">JWT</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">Github</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">VS Code</li>
				<li className="flex-1 text-center p-2 bg-[#2e234c]">Git</li>
			</ul>
		</div>
	);
}

export default Technologies;
