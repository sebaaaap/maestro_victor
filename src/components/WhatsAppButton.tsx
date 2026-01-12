import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/56933529570?text=Hola,%20me%20gustaría%20cotizar%20un%20servicio."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
            <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.a>
    )
}
