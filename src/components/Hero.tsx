import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
            </div>

            <div className="container relative z-10 px-4 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest text-sm font-bold"
                    >
                        Maestro Víctor - Vulcanización Experta
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase leading-tight drop-shadow-xl text-shadow-glow">
                        Reparación de <span className="text-brand-yellow">Neumáticos</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Especialistas en maquinaria pesada y todo tipo de vehículos.
                        Más de 10 años manteniendo a Chile en movimiento.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto gap-2" asChild>
                            <a href="#contact">
                                Solicitar Cotización <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto gap-2 border-white/20 hover:bg-white/10 hover:text-white" asChild>
                            <a href="https://wa.me/56933529570?text=Hola,%20quisiera%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}
