import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // Mock number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center animate-fade-in-up delay-300"
      aria-label="Fale conosco via WhatsApp"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors animate-pulse-ring">
        <MessageCircle size={28} className="relative z-10" />
      </div>
    </a>
  )
}
