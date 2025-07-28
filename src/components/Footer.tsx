import { FiGithub, FiMail, FiPhone, FiCode } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-300 border-t border-gray-800 overflow-hidden">
            {/* Fondo animado (opcional) */}
            <div className="absolute inset-0 z-0 opacity-10">
                {/* SpaceBackground o CircuitBackground puede ir aquí */}
            </div>

            {/* Contenido del footer */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Tecnología utilizada */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-1">
                            <FiCode className="text-2xl text-cyan-400" />
                            <h4 className="text-lg font-semibold text-white">Tecnología</h4>
                        </div>
                        <p className="text-gray-400">
                            Sistema de prueba de velocidad basado en:
                        </p>
                        <a
                            href="https://github.com/librespeed/speedtest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-cyan-400 hover:text-green-400 transition"
                        >
                            <FiGithub className="mr-2" />
                            LibreSpeed SpeedTest
                        </a>
                        <p className="text-sm text-gray-500 mt-2">
                            Licencia Apache 2.0
                        </p>
                    </div>

                    {/* Contacto de soporte */}
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">Soporte Técnico</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-1">
                                <FiMail className="text-green-400" />
                                <span className="text-gray-400">soporte@tuempresa.com</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FiPhone className="text-purple-400" />
                                <span className="text-gray-400">+52 55 1234 5678</span>
                            </div>
                        </div>
                    </div>
                    {/* Legal */}
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">Legal</h4>
                        <nav className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-green-400 transition">Términos de servicio</a>
                            <a href="#" className="block text-gray-400 hover:text-green-400 transition">Política de privacidad</a>
                            <a href="#" className="block text-gray-400 hover:text-green-400 transition">Aviso legal</a>
                            <a href="#" className="block text-gray-400 hover:text-green-400 transition">Política de cookies</a>
                        </nav>
                    </div>
                    {/* Contacto del desarrollador */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <FiCode className="text-2xl text-purple-400" />
                            <h4 className="text-lg font-semibold text-white">Desarrollador</h4>
                        </div>
                        <p className="text-gray-400">
                            Abner Isai Juarez Hernandez
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://wa.me/7331171017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-green-400 hover:text-green-300 transition"
                            >
                                <FaWhatsapp className="mr-2" />
                                WhatsApp
                            </a>
                            <a
                                href="mailto:abner23_08@hotmail.com"
                                className="flex items-center text-cyan-400 hover:text-cyan-300 transition"
                            >
                                <FiMail className="mr-2" />
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* Copyright */}
                <div className="container mx-auto px-4 py-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} WLan Telecom. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        v1.0.0 - Desarrollado con React y Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;