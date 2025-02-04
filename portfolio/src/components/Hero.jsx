import { useState, useEffect } from "react";
import 'animate.css';
import fotoPau from '../assets/imgs/Fto-Pau.jpg';

const Hero = () => {
    const fullText = "Frontend Developer";
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150; // Velocidad al escribir
    const deletingSpeed = 75; // Velocidad al borrar
    const pauseTime = 1000; // Pausa al terminar de escribir

    useEffect(() => {
        let timer;

        if (!isDeleting && typedText === fullText) {
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && typedText === "") {
            timer = setTimeout(() => setIsDeleting(false), pauseTime);
        } else {
            timer = setTimeout(() => {
                setTypedText((prev) =>
                    isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [typedText, isDeleting]);

    return (
        <section class="flex items-center justify-center min-h-[70vh]">
            <div class="container mx-auto px-6 lg:px-20">
                <div class="flex flex-col lg:flex-row items-center justify-between">
                    {/* Columna Izquierda - Texto */}
                    <div class="lg:w-1/2 text-center lg:text-left text-white">
                        <h1 class="text-7xl font-bold animate__animated animate__fadeIn animate__delay-1s">Soy Pau Blanco,</h1>
                        <div class="text-5xl text-sky-500 font-semibold mt-2 min-w-[18ch] h-14 overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
                            <h2 class="whitespace-nowrap">{typedText}</h2>
                        </div>
                        <p class="mt-4 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
                            Desarrollador frontend apasionado por crear interfaces atractivas y funcionales.
                        </p>
                        <a
                            href="/cv.pdf"
                            download
                            class="mt-6 inline-block bg-sky-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-sky-700 transition duration-300 animate__animated animate__fadeIn animate__delay-1s"
                        >
                            Descargar CV
                        </a>
                    </div>

                    {/* Columna Derecha - Imagen */}
                    <div class="lg:w-1/2 flex justify-center mt-10 lg:mt-0 animate__animated animate__fadeIn animate__delay-1s">
                        <img
                            src={fotoPau}
                            alt="Foto de Pau Blanco"
                            class="w-100 h-160 object-cover shadow-lg border-4 border-transparent bg-gradient-to-tl from-transparent"
                            style={{
                                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                                borderRadius: '20px', // Borde redondeado
                            }}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
