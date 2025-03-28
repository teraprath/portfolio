import { motion } from "motion/react"
import AvatarImage from "../assets/avatar.png"
import LinkedInImage from "../assets/linkedin.png"
import GitHubImage from "../assets/github.svg"

function Home() {

    return (
        <section id="home">
            <div className="flex flex-col items-center lg:items-start" >
                <p className="text-lg xl:text-xl font-bold text-gray-800">Hey, I'm <span className="text-blue-500">Terry</span> 👋.</p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">Web Developer</h1>
                <p className="text-lg xl:text-xl font-medium text-gray-500">📍HB, Germany</p>
                <div className="flex gap-x-2 mt-4">
                    <motion.a
                        whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}
                        href="https://www.linkedin.com/in/teraprath-thuansuriya-20452b354/"
                        target="_blank"
                        className="button bg-blue-500 text-white"
                    >
                        <img src={LinkedInImage} alt="LinkedIn" className="size-5" />
                        LinkedIn
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}
                        href="https://github.com/teraprath"
                        target="_blank"
                        className="button bg-gray-800 text-white"
                    >
                        <img src={GitHubImage} alt="GitHub" className="size-5" />
                        GitHub
                    </motion.a>
                </div>
            </div>
            <motion.img
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="rounded-full w-40 lg:w-60 xl:w-70 2xl:w-90"
                src={AvatarImage}
                alt="avatar"
            />
        </section>
    )
}

export default Home