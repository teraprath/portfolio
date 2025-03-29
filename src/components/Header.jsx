import { Link } from "react-scroll"
import { HomeIcon, AcademicCapIcon, Square3Stack3DIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as HomeSolidIcon, AcademicCapIcon as AcademicCapSolidIcon, Square3Stack3DIcon as Square3Stack3DSolidIcon, EnvelopeIcon as EnvelopeSolidIcon } from "@heroicons/react/24/solid";
import useSectionObserver from "../hooks/useSectionObserver";

function Header() {

    const sections = ["home", "about", "work", "contact"]
    const activeSection = useSectionObserver(sections)

    return (
        <header className="header">
            <nav>
                <ul>
                    {sections.map((section) => (
                        <li key={section} className={activeSection === section ? "selected" : ""}>
                            <Link to={section} smooth={true} duration={400}>
                                {section === "home" && (activeSection === section ? <HomeSolidIcon className="size-5" /> : <HomeIcon className="size-5" />)}
                                {section === "about" && (activeSection === section ? <AcademicCapSolidIcon className="size-5" /> : <AcademicCapIcon className="size-5" />)}
                                {section === "work" && (activeSection === section ? <Square3Stack3DSolidIcon className="size-5" /> : <Square3Stack3DIcon className="size-5" />)}
                                {section === "contact" && (activeSection === section ? <EnvelopeSolidIcon className="size-5" /> : <EnvelopeIcon className="size-5" />)}
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header