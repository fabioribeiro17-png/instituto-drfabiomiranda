import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
  Droplets,
  FlaskConical,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PROCEDURES = [
  {
    title: 'Gastroplastia Endoscópica',
    desc: 'Redução do estômago sem cortes.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Balão Intragástrico',
    desc: 'Spatz3 ajustável e convencionais.',
    icon: CircleIcon,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Plasma de Argônio',
    desc: 'Reversão do reganho de peso pós-bariátrica.',
    icon: ShieldCheck,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Protocolos Venosos',
    desc: 'Otimização metabólica e vitamínica.',
    icon: Droplets,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Medicações GLP-1',
    desc: 'Tratamento clínico com tecnologia de ponta.',
    icon: FlaskConical,
    color: 'bg-rose-50 text-rose-600',
  },
]

function CircleIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  )
}

export default function Index() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1600/900?q=modern%20clinic&color=blue"
            alt="Instituto"
            className="w-full h-full object-cover opacity-[0.03] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-8">
            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            Pioneirismo em Endobariátrica no Brasil
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight max-w-4xl mx-auto">
            Emagrecimento <span className="text-gradient-primary">Método 360º</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Abordagem clínica integrada e procedimentos minimamente invasivos para resultados
            consistentes e saúde sustentável.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-cta rounded-full w-full sm:w-auto text-md h-14 px-8"
            >
              <Link to="/faq">
                <MessageSquare className="mr-2 h-5 w-5" /> Tire suas Dúvidas (FAQ)
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full w-full sm:w-auto text-md h-14 px-8 border-primary/20 hover:bg-primary/5 text-primary"
            >
              <Link to="/blog">
                <BookOpen className="mr-2 h-5 w-5" /> Acesse nosso Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links / Procedures */}
      <section id="procedimentos" className="py-24 bg-white relative">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Nossos Tratamentos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta aliada à expertise médica para tratar a obesidade de forma
              personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROCEDURES.map((proc, idx) => (
              <Card
                key={idx}
                className="border-border/50 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${proc.color}`}
                  >
                    <proc.icon size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {proc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{proc.desc}</CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                    Saber mais <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Fabio Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Dr. Fábio Miranda Ribeiro
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 font-light leading-relaxed">
              Médico Especialista dedicado à evolução dos tratamentos contra a obesidade. Autoridade
              em procedimentos endoscópicos e criador do <strong>Método 360</strong>, focado em
              resultados duradouros através de acompanhamento multidisciplinar de excelência.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60 mb-8">
              <span>CRM-RJ 520111398-4</span>
              <span className="w-1 h-1 rounded-full bg-secondary"></span>
              <span>RQE Titular</span>
            </div>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full"
            >
              Conheça a Trajetória
            </Button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary/20 shadow-2xl">
              <img
                src="https://img.usecurling.com/ppl/large?gender=male&seed=doctor"
                alt="Dr. Fábio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
