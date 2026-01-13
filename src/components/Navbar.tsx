import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Servicios", href: "#services" },
        { name: "Nosotros", href: "#about" },
        { name: "Testimonios", href: "#testimonials" },
        { name: "Contacto", href: "#contact" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="Vulcanización Quilicura Logo" className="h-12 w-auto md:h-16 transition-transform group-hover:scale-105" />
                    <span className="hidden sm:block text-xl font-heading font-bold text-white group-hover:text-brand-yellow transition-colors">
                        VULCANIZACIÓN <span className="text-primary">QUILICURA</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/90 hover:text-primary transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="default" className="gap-2" asChild>
                        <a href="https://wa.me/56933529570?text=Hola,%20quisiera%20cotizar..." target="_blank">
                            <Phone className="w-4 h-4" />
                            Cotizar
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white hover:text-primary p-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full gap-2 mt-4" asChild>
                                <a href="tel:+56933529570">
                                    <Phone className="w-4 h-4" />
                                    Llamar Ahora
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
