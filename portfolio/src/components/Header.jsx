import GitHub from '../assets/imgs/github.png'
import Linkedin from '../assets/imgs/linkedin.png'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <>
            <nav className="flex items-center justify-between">
                {/* Título animado desde la izquierda */}
                <motion.div
                    className="m-8 flex flex-shrink-0 items-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-white text-6xl font-bold underline decoration-sky-500 underline-offset-8">
                        PB
                    </h1>
                </motion.div>

                {/* Contenedor de iconos animados desde la derecha */}
                <motion.div
                    className="m-8 flex items-center gap-6 text-2xl"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Botón de GitHub */}
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="rounded-lg overflow-hidden shadow-[0_0_6px_2px_white]"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img className="rounded-lg" src={GitHub} alt="Logo GitHub" />
                        </motion.div>
                    </a>

                    {/* Botón de LinkedIn */}
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            className="rounded-lg overflow-hidden shadow-[0_0_6px_2px_white]"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img className="rounded-lg" src={Linkedin} alt="Logo Linkedin" />
                        </motion.div>
                    </a>
                </motion.div>
            </nav>
        </>
    )
}

export default Header