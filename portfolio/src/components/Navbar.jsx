import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border-2 border-stone-200 rounded-full px-6 py-2 flex items-center gap-6 shadow-lg bg-transparent m-4"
            initial={{ y: 100, opacity: 0 }} // Empieza desde abajo y oculto
            animate={{ y: 0, opacity: 1 }} // Se mueve a su posición normal
            transition={{ duration: 0.8, ease: "easeOut" }} // Suavidad en la animación
            whileHover={{ scale: 1.1}} // Crece y cambia de color
        >
            <a href="#home" className="flex flex-col items-center text-stone-200 hover:text-sky-500 transition duration-300">
                <FaHome className="text-2xl" />
                <span className="text-xs">Home</span>
            </a>
            <a href="#about" className="flex flex-col items-center text-stone-200 hover:text-sky-500 transition duration-300">
                <FaUser className="text-2xl" />
                <span className="text-xs">Sobre mí</span>
            </a>
            <a href="#tech" className="flex flex-col items-center text-stone-200 hover:text-sky-500 transition duration-300">
                <FaCode className="text-2xl" />
                <span className="text-xs">Tecnologías</span>
            </a>
            <a href="#contact" className="flex flex-col items-center text-stone-200 hover:text-sky-500 transition duration-300">
                <FaEnvelope className="text-2xl" />
                <span className="text-xs">Contacto</span>
            </a>
        </motion.nav>
    );
};

export default Navbar;
