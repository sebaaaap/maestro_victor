import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const reviews = [
    {
        "autor": "Daniel Ulises",
        "rating": "5",
        "fecha": "3 semanas atrás",
        "texto": "Rápido, limpio, amplio, exelente servicio",
        "foto_perfil": "https://lh3.googleusercontent.com/a/ACg8ocJGB0LATZHOKUMzSqSrmjCLRLszAdD5fOwCFbn8tdpMMMnlxA=s150-c-mo",
        "color": "bg-blue-700"
    },
    {
        "autor": "Andrea Jimenez",
        "rating": "5",
        "fecha": "4 semanas atrás",
        "texto": "Muy buen servicio! Me atendió el dueño. Gracias",
        "foto_perfil": "https://lh3.googleusercontent.com/a/ACg8ocIH3c5eMXY7v3TRysEsYOgjOWKUkmbMwHDA216Kln9RqeZHbw=s150-c-mo",
        "color": "bg-emerald-700"
    },
    {
        "autor": "Pablo Jara",
        "rating": "5",
        "fecha": "Hace un mes",
        "texto": "muy buena atención, excelente servicio , rapidez",
        "foto_perfil": "https://lh3.googleusercontent.com/a/ACg8ocLKJ0syaHgebCyxzAmUcfdex-HnIKsydl5ZcFXJLICW-v9eBBQ=s150-c-mo",
        "color": "bg-orange-600"
    },
    {
        "autor": "Chechosayan Miranda",
        "rating": "5",
        "fecha": "Hace 3 meses",
        "texto": "Lugar ordenado y limpio, trabajo profesional, rapidez y eficacia en complicaciones, trato respetuoso y preocupado.",
        "foto_perfil": "https://lh3.googleusercontent.com/a-/ALV-UjWIdTUQeY-mDcHNuM9o1VBwyI8e-3q_cySlNLUl_H7aiFsJD40=s150-c-mo",
        "color": "bg-purple-600"
    },
    {
        "autor": "Felipe Torres",
        "rating": "5",
        "fecha": "Hace 3 meses",
        "texto": "Día 20 de septiembre a pesar de estar cerrado me atendió igual y quedó impecable. 1000% recomendado.",
        "foto_perfil": "https://lh3.googleusercontent.com/a-/ALV-UjV6WJs_xSyS1Sl0uDqPd9HfUEEKcStUVUkrOj7IyShcx_iuF1ZdJw=s150-c-mo",
        "color": "bg-red-600"
    },
    {
        "autor": "Claudiio Barra",
        "rating": "5",
        "fecha": "Hace 4 meses",
        "texto": "Genial el servicio, muy buenos precios. Y café gratis para la espera. Recomendable!!!",
        "foto_perfil": "https://lh3.googleusercontent.com/a-/ALV-UjVNHeGOuWagISQCL7bRzLrJZyM_6jPItRKqRZR_6t423Q9gN4De=s150-c-mo",
        "color": "bg-slate-700"
    }
];

export default function GoogleReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setItemsPerPage(3);
            else if (window.innerWidth >= 768) setItemsPerPage(2);
            else setItemsPerPage(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, reviews.length - itemsPerPage);

    const next = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="py-20 bg-white font-sans overflow-hidden">
            <div className="container px-4 mx-auto max-w-7xl">

                {/* Header de Google Reviews */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-gray-100 pb-10">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            className="h-8"
                        />
                        <span className="text-3xl font-medium text-gray-500">Reviews</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-gray-900 tracking-tight">4.6</span>
                                <div className="flex text-[#FABB05]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-7 h-7 fill-current ${i === 4 ? 'text-gray-200' : ''}`} />
                                    ))}
                                </div>
                            </div>
                            <a
                                href="https://www.google.com/maps/place/Vulcanizacion+Quilicura+(Maestro+V%C3%ADctor)/@-33.3711292,-70.740087,17z/data=!4m8!3m7!1s0x9662c1ecf0fff155:0x66ba6fb1e5d5902f!8m2!3d-33.3711337!4d-70.7375121!9m1!1b1!16s%2Fg%2F11mw5brxwh?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 font-medium text-lg mt-1 hover:text-[#4285F4] transition-colors"
                            >
                                Basado en 87 reseñas
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/Vulcanizacion+Quilicura+(Maestro+V%C3%ADctor)/@-33.3711292,-70.740087,17z/data=!4m8!3m7!1s0x9662c1ecf0fff155:0x66ba6fb1e5d5902f!8m2!3d-33.3711337!4d-70.7375121!9m1!1b1!16s%2Fg%2F11mw5brxwh?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#4285F4] hover:bg-[#357ae8] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 text-base"
                    >
                        Escribir reseña
                    </a>
                </div>

                {/* Carousel Container */}
                <div className="relative group px-4">
                    <div className="overflow-hidden" ref={containerRef}>
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {reviews.map((r, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0"
                                    style={{ width: `calc(${100 / itemsPerPage}% - ${(gap => (gap * (itemsPerPage - 1)) / itemsPerPage)(24)}px)` }}
                                >
                                    <Card className="bg-[#F8F9FA] border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl overflow-hidden">
                                        <CardContent className="p-8 flex flex-col h-full">

                                            {/* Avatar y Datos del Autor */}
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="relative shrink-0">
                                                    {r.foto_perfil ? (
                                                        <img
                                                            src={r.foto_perfil}
                                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                                            alt={r.autor}
                                                            onError={(e) => e.currentTarget.style.display = 'none'}
                                                        />
                                                    ) : (
                                                        <div className={`w-14 h-14 rounded-full ${r.color} flex items-center justify-center text-white text-2xl font-bold uppercase shadow-sm`}>
                                                            {r.autor[0]}
                                                        </div>
                                                    )}
                                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md">
                                                        <img src="https://www.google.com/favicon.ico" className="w-3.5 h-3.5" alt="G" />
                                                    </div>
                                                </div>

                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-gray-900 text-base truncate">
                                                            {r.autor}
                                                        </span>
                                                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current bg-white rounded-full flex-shrink-0" />
                                                    </div>
                                                    <p className="text-sm text-gray-500 font-medium">{r.fecha}</p>
                                                </div>
                                            </div>

                                            {/* Calificación de Estrellas */}
                                            <div className="flex text-[#FABB05] mb-4 gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-current" />
                                                ))}
                                            </div>

                                            {/* Cuerpo de la Reseña */}
                                            <p className="text-gray-700 text-base leading-relaxed line-clamp-4 flex-grow italic">
                                                "{r.texto}"
                                            </p>

                                            <a
                                                href="https://www.google.com/maps/place/Vulcanizacion+Quilicura+(Maestro+V%C3%ADctor)/@-33.3711292,-70.740087,17z/data=!4m8!3m7!1s0x9662c1ecf0fff155:0x66ba6fb1e5d5902f!8m2!3d-33.3711337!4d-70.7375121!9m1!1b1!16s%2Fg%2F11mw5brxwh?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#1a73e8] text-sm font-bold mt-6 text-left hover:underline w-fit inline-block"
                                            >
                                                Ver más en Google
                                            </a>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Botones de Navegación */}
                    <button
                        onClick={prev}
                        className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-600 rounded-full p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-600 rounded-full p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Indicadores de página */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === i
                                ? "w-10 h-2.5 bg-[#4285F4]"
                                : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}