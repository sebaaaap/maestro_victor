import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl"
                >
                    {/* Form */}
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">
                            Contáctanos
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Envíanos un mensaje o visítanos. Estamos listos para ayudarte.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Nombre</label>
                                    <Input placeholder="Tu nombre" className="bg-background/50 border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Teléfono</label>
                                    <Input placeholder="+56 9..." className="bg-background/50 border-white/10" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <Input type="email" placeholder="correo@ejemplo.com" className="bg-background/50 border-white/10" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Mensaje</label>
                                <Textarea placeholder="Cuéntanos qué necesitas..." className="bg-background/50 border-white/10 min-h-[120px]" />
                            </div>

                            <Button size="lg" className="w-full text-base">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>

                    {/* Info & Map */}
                    <div className="bg-background/50 p-8 md:p-12 relative">
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-medium text-white mb-1">Ubicación</h3>
                                    <p className="text-gray-400">Av. Américo Vespucio 1352<br />Quilicura, 8700468</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-medium text-white mb-1">Teléfono</h3>
                                    <p className="text-gray-400">+56 9 3352 9570</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-medium text-white mb-1">Horario</h3>
                                    <div className="text-gray-400 text-sm grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
                                        <span>Lun - Vie:</span>
                                        <span>8:00 AM - 7:00 PM</span>
                                        <span>Sábado:</span>
                                        <span>9:00 AM - 2:00 PM</span>
                                        <span>Domingo:</span>
                                        <span>Cerrado</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[300px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://maps.google.com/maps?q=Av.+Américo+Vespucio+1352,+Quilicura&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
