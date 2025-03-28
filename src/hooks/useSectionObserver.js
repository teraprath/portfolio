import { useState, useEffect } from "react"

const useSectionObserver = (sectionIds) => {

    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {

            let currentSection = ""

            for (const id of sectionIds) {
                const section = document.getElementById(id)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        currentSection = id;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [sectionIds])

    return activeSection
}

export default useSectionObserver