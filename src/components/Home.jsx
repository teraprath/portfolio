import { motion } from "motion/react"
import AvatarImage from "../assets/avatar.png"

function Home() {

    return (
        <section id="home">
            <div className="flex flex-col items-center lg:items-start" >
                <p className="text-lg xl:text-xl font-bold text-gray-900">Hi, my name is <span className="text-blue-600">Terry</span> 👋.</p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">Software Engineer</h1>
                <p className="text-lg xl:text-xl font-medium text-gray-600">📍Bremerhaven, Germany</p>
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