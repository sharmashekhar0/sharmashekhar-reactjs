import Bio from "./Bio";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Technologies from "./Technologies";

function Hero() {
	return (
		<div className="min-h-screen bg-[#001840] text-white px-12 flex flex-col gap-12 pb-4git">
			<Bio />
			<Skills />
			<Technologies />
			<Projects />
			<Education />
			<ContactMe />
		</div>
	);
}

export default Hero;
