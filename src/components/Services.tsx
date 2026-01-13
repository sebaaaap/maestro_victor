import { motion } from "framer-motion"
import { Wrench, Car, Gauge, Cog, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const services = [
    {
        icon: Wrench,
        title: "Automóviles y Motos",
        desc: "Servicio completo para automóviles y motocicletas. Reparación y mantención experta."
    },
    {
        icon: Car,
        title: "Maquinaria Pesada",
        desc: "Especialistas en neumáticos de gran tamaño para minería y construcción."
    },
    {
        icon: Gauge,
        title: "Balanceo Electrónico",
        desc: "Calibración precisa para asegurar la vida útil de tus neumáticos."
    },
    {
        icon: Cog,
        title: "Vulcanización Industrial",
        desc: "Procesos técnicos avanzados para recuperación de neumáticos."
    },
    {
        icon: Shield,
        title: "Calidad Garantizada",
        desc: "Utilizamos parches y pegamentos de marcas líderes en el mercado."
    },
    {
        icon: Clock,
        title: "Servicio Rápido",
        desc: "Atención eficiente para minimizar los tiempos de inactividad."
    }
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-background relative z-10">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Nuestros <span className="text-primary">Servicios</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Soluciones integrales para todo tipo de vehículos, con tecnología de punta y experiencia comprobada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full bg-card border-white/5 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                                <CardContent className="p-8 flex flex-col items-center text-center h-full z-10 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </CardContent>
                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
