import linkedin from "./assets/linkedin-in.svg";
import github from "./assets/github.svg";

function Header() {
	return (
		<div className="flex justify-between items-center pt-2 px-12 bg-[#001840] text-white h-12 sticky top-0">
			<p className="text-3xl font-bold">
				<span className="text-[#f5c400]">S</span>hekhar{" "}
				<span className="text-[#f5c400]">S</span>harma
			</p>
			<ul className="flex gap-8 text-sm">
				<li className="hover:text-[#f5c400] cursor-pointer">Home</li>
				<li className="hover:text-[#f5c400] cursor-pointer">Skills</li>
				<li className="hover:text-[#f5c400] cursor-pointer">
					Projects
				</li>
				<li className="hover:text-[#f5c400] cursor-pointer">About</li>
				<li className="hover:text-[#f5c400] cursor-pointer">Contact</li>
			</ul>
			<ul className="flex gap-4">
				<li className="cursor-pointer relative w-4 h-4">
					<img
						src={linkedin}
						alt="Linkedin Logo"
						className="absolute h-full w-full transition duration-300 transform hover:scale-125"
						style={{ fill: "currentcolor" }}
					/>
				</li>
				<li className="cursor-pointer relative w-4 h-4">
					<img
						src={github}
						alt="Github Logo"
						className="absolute h-full w-full transition duration-300 transform hover:scale-125"
					/>
				</li>
			</ul>
		</div>
	);
}

export default Header;
