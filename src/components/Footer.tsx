import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                            <h3 className="text-xl font-heading font-bold text-white">
                                MAESTRO <span className="text-brand-yellow">VÍCTOR</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Más de 10 años de experiencia en la reparación profesional de neumáticos y vulcanización. Calidad garantizada.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading font-semibold text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">Nosotros</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading font-semibold text-white">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Av. Américo Vespucio 1352</li>
                            <li>Quilicura, 8700468</li>
                            <li>+56 9 3352 9570</li>
                            <li>contacto@maestrovictor.cl</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading font-semibold text-white">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/vipejo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@vulcanizacion_quilicura" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Maestro Victor. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
