import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { MapPin, Phone, Clock, CheckCircle2, X } from "lucide-react"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        marcaVehiculo: "",
        modeloVehiculo: "",
        anioVehiculo: "",
        mensaje: ""
    })
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [errors, setErrors] = useState({
        email: "",
        telefono: ""
    })

    // Validar email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Validar teléfono (9 dígitos)
    const validatePhone = (phone: string) => {
        return /^\d{9}$/.test(phone)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value
        setFormData({ ...formData, email })

        if (email && !validateEmail(email)) {
            setErrors({ ...errors, email: "Correo electrónico no válido" })
        } else {
            setErrors({ ...errors, email: "" })
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Solo permitir números y limitar a 9 dígitos
        const phone = e.target.value.replace(/\D/g, '').slice(0, 9)
        setFormData({ ...formData, telefono: phone })

        if (phone && !validatePhone(phone)) {
            setErrors({ ...errors, telefono: "Ingresa 9 dígitos" })
        } else {
            setErrors({ ...errors, telefono: "" })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validar que todos los campos requeridos estén completos
        if (!formData.nombre || !formData.telefono || !formData.email ||
            !formData.marcaVehiculo || !formData.modeloVehiculo ||
            !formData.anioVehiculo || !formData.mensaje) {
            alert("Por favor completa todos los campos requeridos")
            return
        }

        // Validar formato de email
        if (!validateEmail(formData.email)) {
            alert("Por favor ingresa un correo electrónico válido")
            return
        }

        // Validar formato de teléfono
        if (!validatePhone(formData.telefono)) {
            alert("Por favor ingresa un número de teléfono válido (9 dígitos)")
            return
        }

        // Construir el mensaje de WhatsApp
        const whatsappNumber = "56933529570"
        const message = `*Nuevo Mensaje de Contacto*%0A%0A` +
            `*Nombre:* ${formData.nombre}%0A` +
            `*Teléfono:* +56 ${formData.telefono}%0A` +
            `*Email:* ${formData.email}%0A%0A` +
            `*Datos del Vehículo:*%0A` +
            `*Marca:* ${formData.marcaVehiculo}%0A` +
            `*Modelo:* ${formData.modeloVehiculo}%0A` +
            `*Año:* ${formData.anioVehiculo}%0A%0A` +
            `*Mensaje:*%0A${formData.mensaje}`

        // Abrir WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')

        // Mostrar mensaje de éxito
        setShowSuccessMessage(true)

        // Limpiar formulario
        setFormData({
            nombre: "",
            telefono: "",
            email: "",
            marcaVehiculo: "",
            modeloVehiculo: "",
            anioVehiculo: "",
            mensaje: ""
        })

        setErrors({
            email: "",
            telefono: ""
        })

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            setShowSuccessMessage(false)
        }, 5000)
    }

    return (
        <section id="contact" className="py-20 bg-muted/20">
            <div className="container px-4 mx-auto">
                {/* Mensaje de Éxito */}
                <AnimatePresence>
                    {showSuccessMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 mx-auto max-w-2xl"
                        >
                            <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-500 bg-gradient-to-r from-red-600/95 via-yellow-600/95 to-red-600/95 p-6 shadow-2xl">
                                {/* Botón de cerrar */}
                                <button
                                    onClick={() => setShowSuccessMessage(false)}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                                        >
                                            <CheckCircle2 className="w-7 h-7 text-black" />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                                            ¡Mensaje Enviado!
                                        </h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Gracias por contactarnos. Pronto nos pondremos en contacto contigo para ayudarte con tus necesidades de vulcanización.
                                        </p>
                                    </div>
                                </div>

                                {/* Efecto de brillo animado */}
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Información Personal */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-heading font-semibold text-white">Información Personal</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Nombre <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Tu nombre"
                                        className="bg-background/50 border-white/10"
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Teléfono <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                                            +56
                                        </span>
                                        <Input
                                            placeholder="9 XXXX XXXX"
                                            className="bg-background/50 border-white/10 pl-12"
                                            value={formData.telefono}
                                            onChange={handlePhoneChange}
                                            maxLength={9}
                                            required
                                        />
                                    </div>
                                    {errors.telefono && (
                                        <p className="text-sm text-red-400">{errors.telefono}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    className="bg-background/50 border-white/10"
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            {/* Datos del Vehículo */}
                            <div className="space-y-2 pt-4">
                                <h3 className="text-lg font-heading font-semibold text-white">Datos del Vehículo</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Marca <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Ej: Toyota, Chevrolet, Ford"
                                        className="bg-background/50 border-white/10"
                                        value={formData.marcaVehiculo}
                                        onChange={(e) => setFormData({ ...formData, marcaVehiculo: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Modelo <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        placeholder="Ej: Corolla, Silverado, F-150"
                                        className="bg-background/50 border-white/10"
                                        value={formData.modeloVehiculo}
                                        onChange={(e) => setFormData({ ...formData, modeloVehiculo: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Año <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="number"
                                    placeholder="Ej: 2020"
                                    className="bg-background/50 border-white/10"
                                    value={formData.anioVehiculo}
                                    onChange={(e) => setFormData({ ...formData, anioVehiculo: e.target.value })}
                                    min="1900"
                                    max="2030"
                                    required
                                />
                            </div>

                            {/* Mensaje */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    placeholder="Cuéntanos qué necesitas... (Ej: Reparación de llanta, cambio de neumáticos, etc.)"
                                    className="bg-background/50 border-white/10 min-h-[120px]"
                                    value={formData.mensaje}
                                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                    required
                                />
                            </div>

                            <Button size="lg" className="w-full text-base" type="submit">
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
