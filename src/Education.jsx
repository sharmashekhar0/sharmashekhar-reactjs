function Education() {
	return (
		<div className="flex flex-col justify-between">
			<ul>
				<li className="flex items-center gap-2">
					{/* <hr className="w-12" /> */}
					<p className="text-2xl">Education.</p>
				</li>
			</ul>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between bg-[#2e234c] rounded p-2">
					<div>
						<h2 className="text-xl font-bold">
							Kamla Nehru Institute of Technology
						</h2>
						<p className="italic">Master of Computer Application</p>
					</div>
					<div className="flex flex-col items-end">
						<p>Sultanpur, India</p>
						<p className="italic">Nov 2021 - May 2023</p>
					</div>
				</div>
				<div className="flex justify-between bg-[#2e234c] rounded p-2">
					<div>
						<h2 className="text-xl font-bold">
							Swami Sukhdevanand Post Graduate College
						</h2>
						<p className="italic">
							Bachelor of Computer Application
						</p>
					</div>
					<div className="flex flex-col items-end">
						<p>Shahjahanpur, India</p>
						<p className="italic">Aug 2017 - Nov 2020</p>
					</div>
				</div>
				<div className="flex justify-between bg-[#2e234c] rounded p-2">
					<div>
						<h2 className="text-xl font-bold">
							B S Public School [CBSE]
						</h2>
						<p className="italic">Intermediate</p>
					</div>
					<div className="flex flex-col items-end">
						<p>Shahjahanpur, India</p>
						<p className="italic">May 2015 - April 2017</p>
					</div>
				</div>
				<div className="flex justify-between bg-[#2e234c] rounded p-2">
					<div>
						<h2 className="text-xl font-bold">
							B S Public School [CBSE]
						</h2>
						<p className="italic">High School</p>
					</div>
					<div className="flex flex-col items-end">
						<p>Shahjahanpur, India</p>
						<p className="italic">May 2013 - April 2015</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
