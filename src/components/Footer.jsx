import Kofi from "../assets/kofi.svg";

function Footer() {
    return (
        <footer className="pb-22 xl:py-0 xl:h-22 w-screen flex flex-col xl:flex-row justify-center xl:justify-between items-center text-sm px-8 lg:px-40 xl:px-60 2xl:px-80">
            <a href="http://ko-fi.com/teraprath" target="_blank" className="hover:opacity-80 transition duration-200 ease-in-out">
                <img src={Kofi} alt="Kofi" className="size-20" />
            </a>
            <article className="text-center xl:text-right">
                <p className="text-gray-500"><span className="text-gray-400">Made by</span> Teraprath Thuansuriya</p>
                <p className="text-gray-400">© 2025 － All rights reserved</p>
            </article>
        </footer>
    )
}

export default Footer