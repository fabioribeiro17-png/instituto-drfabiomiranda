import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { WhatsAppButton } from './WhatsAppButton'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100)
      } else {
        setScrollProgress(0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Procedimentos', path: '/#procedimentos' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-full bg-secondary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={cn(
          'fixed top-1 left-0 right-0 z-40 transition-all duration-300 w-full',
          isScrolled ? 'glass-header shadow-soft py-3' : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <Activity className="text-secondary h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-primary">
                Inst. Dr. Fábio
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Miranda Ribeiro
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-gradient-cta rounded-full px-6">
              Agendar Consulta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={cn(
            'fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 transition-transform duration-300 md:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col gap-6 text-xl font-serif">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="border-b border-border pb-4">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Button className="w-full bg-gradient-cta h-12 text-lg">Agendar Consulta</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-24 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="text-secondary h-8 w-8" />
                <span className="font-serif font-bold text-2xl">Instituto Alma</span>
              </div>
              <p className="text-primary-foreground/70 mb-4 max-w-sm">
                Referência internacional em Endoscopia Bariátrica e Emagrecimento 360. Transformando
                vidas com tecnologia e acolhimento.
              </p>
              <div className="text-sm text-primary-foreground/50 space-y-1">
                <p>Diretor Técnico: Dr. Fábio Miranda Ribeiro</p>
                <p>CRM-RJ: 520111398-4 | RQE: [Número]</p>
                <p>Responsabilidade Técnica e Ética Médica conforme CFM 2336/2023</p>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <Link to="/faq" className="hover:text-secondary transition-colors">
                    Dúvidas Frequentes (FAQ)
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-secondary transition-colors">
                    Blog & Artigos
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="hover:text-secondary transition-colors">
                    Nossa Estrutura
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="hover:text-secondary transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-lg mb-4 text-white">Atendimento</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>Seg - Sex: 08:00 às 19:00</li>
                <li>Sábados: 09:00 às 13:00</li>
                <li className="mt-4 pt-4 border-t border-primary-foreground/10">
                  <span className="block text-xs text-primary-foreground/50 mb-1">
                    Central de Agendamento
                  </span>
                  <a
                    href="tel:+5521999999999"
                    className="font-semibold text-secondary hover:text-white transition-colors"
                  >
                    (21) 9999-9999
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>
              &copy; {new Date().getFullYear()} Instituto Dr. Fábio Miranda Ribeiro. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
