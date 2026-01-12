import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const testimonials = [
    {
        name: "Juan Pérez",
        role: "Transportista",
        content: "Excelente servicio, rápido y confiable. El Maestro Víctor sabe exactamente lo que hace con neumáticos de camión.",
        stars: 5,
    },
    {
        name: "María Gonzales",
        role: "Empresa de Construcción",
        content: "Llevamos años trabajando con ellos para nuestra flota de maquinaria pesada. Nunca nos han fallado.",
        stars: 5,
    },
    {
        name: "Carlos Ruiz",
        role: "Particular",
        content: "Me salvaron de un apuro un domingo. La atención fue muy amable y el precio justo.",
        stars: 5,
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-background relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Voces de <span className="text-primary">Confianza</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Lo que dicen nuestros clientes sobre nuestro trabajo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full bg-card border-white/5 hover:-translate-y-2 transition-transform duration-300">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                                    <p className="text-gray-300 mb-6 italic flex-grow">"{t.content}"</p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-lg">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-medium text-white">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mt-4">
                                        {[...Array(t.stars)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
