import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { BadgeCheck, Users, Calendar, Wrench } from "lucide-react"

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null)
    const inView = useInView(nodeRef, { once: true })

    useEffect(() => {
        if (!inView) return

        let startTime: number
        const duration = 2000

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            const value = Math.floor(progress * (to - from) + from)
            if (nodeRef.current) {
                nodeRef.current.textContent = value.toString()
            }

            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }

        requestAnimationFrame(step)
    }, [inView, from, to])

    return <span ref={nodeRef} />
}

export default function About() {
    return (
        <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-8"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Experiencia y <span className="text-primary">Confianza</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            En Vulcanización Quilicura,
                            bajo la experta mano del Maestro Víctor, nos dedicamos a la reparación integral de neumáticos con una trayectoria marcada por la calidad y el compromiso.
                        </p>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Nos especializamos en maquinaria pesada, entendiendo que cada minuto cuenta
                            en su operación. Nuestra técnica combina métodos tradicionales probados
                            con materiales de vanguardia para asegurar reparaciones duraderas y seguras.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <BadgeCheck className="w-6 h-6 text-primary" />
                                <span className="text-white font-medium">Garantía Real</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-primary" />
                                <span className="text-white font-medium">Atención Personalizada</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Wrench className="w-6 h-6 text-primary" />
                                <span className="text-white font-medium">Equipos Modernos</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-primary" />
                                <span className="text-white font-medium">Atención Continua</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats & Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 bg-card p-8 rounded-2xl border border-white/5 text-center">
                                <h3 className="text-5xl font-heading font-bold text-primary mb-2">
                                    +<Counter from={0} to={42} />
                                </h3>
                                <p className="text-gray-400 uppercase tracking-widest text-sm">Años de Experiencia</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl border border-white/5 text-center">
                                <h3 className="text-4xl font-heading font-bold text-white mb-2">
                                    +<Counter from={0} to={1000} />
                                </h3>
                                <p className="text-gray-400 uppercase tracking-widest text-xs">Clientes Felices</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl border border-white/5 text-center">
                                <h3 className="text-4xl font-heading font-bold text-white mb-2">
                                    100%
                                </h3>
                                <p className="text-gray-400 uppercase tracking-widest text-xs">Calidad</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
