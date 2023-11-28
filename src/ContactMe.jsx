function ContactMe() {
	return (
		<div className="flex justify-between">
			<ul>
				<li className="flex items-center gap-2">
					{/* <hr className="w-12" /> */}
					<p className="text-2xl">Connect with Me.</p>
				</li>
			</ul>
			<div className="flex flex-col gap-2 w-1/2 px-16">
				<div className="flex items-center gap-2">
					{/* <hr className="w-12" /> */}
					<p className="text-2xl">Contact Me.</p>
				</div>
				<form action="" className="flex flex-col gap-2">
					<input
						className=" rounded p-2 bg-[#2d2b61] outline-none"
						type="text"
						placeholder="Enter Full Name"
					/>
					<input
						className=" rounded p-2 bg-[#2d2b61] outline-none"
						type="text"
						placeholder="Enter Email"
					/>
					<textarea className=" rounded p-2 bg-[#2d2b61] resize-none h-40 outline-none"></textarea>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
