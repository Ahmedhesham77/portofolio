//links
import Link from "next/link";

//icons
import {

  RiFacebookLine,
  RiWhatsappLine
} from "react-icons/ri"
import {

  SiFreelancer
} from "react-icons/si"

const Socials = () => {
  return <div
    className="flex items-center gap-x-5 text-lg"
  >
    <Link href={"https://www.freelancer.com/search/projects?q=web&projectLanguages=en&projectSkills=335,9,69,95,323,500,502,598,2380"} className="hover:text-accent transition-all duration-300">
      <SiFreelancer />
    </Link>
    <Link href={"https://www.facebook.com/ahmad.shaamia/"} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link
      href="https://wa.me/+201558300711"
      className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiWhatsappLine />
    </Link>
  </div>;
};

export default Socials;
