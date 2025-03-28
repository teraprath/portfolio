import { HomeIcon, UserIcon, CodeBracketIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
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
                            <a href={`#${section}`}>
                                {section === "home" && <HomeIcon className="size-5" />}
                                {section === "about" && <UserIcon className="size-5" />}
                                {section === "work" && <CodeBracketIcon className="size-5" />}
                                {section === "contact" && <EnvelopeIcon className="size-5" />}
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header