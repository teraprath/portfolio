import { motion } from "motion/react"
import AboutImage from "../assets/about.jpeg"

function About() {

    return (
        <section id="about" className="bg-gray-50 flex justify-center items-center gap-x-4 xl:gap-x-8 text-gray-800">
            <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                className="h-160 w-full xl:w-120 bg-white rounded-lg hidden xl:block"
            >
                <img src={AboutImage} alt="me" className="rounded-lg" />
            </motion.div>
            <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                className="h-160 w-full xl:w-100 flex flex-col gap-y-4 xl:gap-y-8"
            >
                <div className="h-1/2 w-full bg-white rounded-lg">
                    <article className="h-full p-8 flex flex-col justify-between">
                        <h2 className="font-semibold text-center">About</h2>
                        <p className="text-justify text-gray-500">Hi, I’m Teraprath Thuansuriya, a 21-year-old web developer from Germany. I’ve been coding for over 5 years and love exploring new technologies. I focus on building modern, efficient websites and always strive to learn and improve to bring ideas to life through code!</p>
                        <ul>
                            <li><a></a></li>
                            <li><a></a></li>
                            <li><a></a></li>
                        </ul>
                    </article>
                </div>
                <div className="h-1/2 w-full bg-white rounded-lg">
                    <article className="h-full p-8 flex flex-col justify-between">
                        <h2 className="font-semibold text-center">Tech-Stack</h2>
                        <ul className="tech-stack">
                            <li>
                                <img src="icon/javascript.svg" alt="javascript" />
                                JavaScript
                            </li>
                            <li>
                                <img src="icon/typescript.svg" alt="typescript" />
                                TypeScript
                            </li>
                            <li>
                                <img src="icon/csharp.svg" alt="csharp" />
                                C# / .NET
                            </li>
                            <li>
                                <img src="icon/react.svg" alt="react" />
                                React
                            </li>
                            <li>
                                <img src="icon/vue.svg" alt="vue" />
                                Vue
                            </li>
                            <li>
                                <img src="icon/angular.svg" alt="angular" />
                                Angular
                            </li>
                            <li>
                                <img src="icon/html5.svg" alt="html5" />
                                HTML
                            </li>
                            <li>
                                <img src="icon/css3.svg" alt="css3" />
                                CSS
                            </li>
                        </ul>
                    </article>
                </div>
            </motion.div>
        </section>
    )
}

export default About