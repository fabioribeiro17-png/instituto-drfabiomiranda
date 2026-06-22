import { useState, useMemo, useEffect } from 'react'
import { Search, Info, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FAQS, FAQ_CATEGORIES } from '@/data/content'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Filter logic
  const filteredFaqs = useMemo(() => {
    let filtered = FAQS

    if (activeCategory) {
      filtered = filtered.filter((f) => f.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q),
      )
    }

    // Group back by category for rendering if no specific category is active, or just group the filtered results
    const grouped: Record<string, typeof FAQS> = {}
    filtered.forEach((faq) => {
      if (!grouped[faq.category]) grouped[faq.category] = []
      grouped[faq.category].push(faq)
    })

    return grouped
  }, [searchQuery, activeCategory])

  // Inject SEO Schema
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('faq-schema')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="bg-background min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Central de Dúvidas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas detalhadas sobre nossos procedimentos e entenda o funcionamento do
            Método 360.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 relative animate-fade-in-up delay-100">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Busque por 'Spatz3', 'recuperação', 'dor'..."
            className="w-full pl-12 h-14 text-lg rounded-2xl shadow-soft border-border/50 focus-visible:ring-secondary focus-visible:border-secondary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 animate-fade-in-up delay-200">
          {/* Categories Sidebar - Desktop / Horizontal Scroll - Mobile */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-28">
              <h3 className="font-serif font-semibold text-xl mb-4 hidden lg:block text-primary">
                Categorias
              </h3>
              <ScrollArea className="w-full whitespace-nowrap lg:whitespace-normal pb-4 lg:pb-0">
                <div className="flex lg:flex-col gap-2 w-max lg:w-full">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={cn(
                      'px-5 py-3 rounded-xl text-sm font-medium transition-all text-left border',
                      activeCategory === null
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-white text-muted-foreground hover:bg-muted hover:text-foreground border-transparent hover:border-border',
                    )}
                  >
                    Todas as Dúvidas
                  </button>
                  {FAQ_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        'px-5 py-3 rounded-xl text-sm font-medium transition-all text-left border',
                        activeCategory === category
                          ? 'bg-primary text-primary-foreground border-primary shadow-md'
                          : 'bg-white text-muted-foreground hover:bg-muted hover:text-foreground border-transparent hover:border-border',
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" className="lg:hidden" />
              </ScrollArea>

              {/* Sidebar Info Card */}
              <Card className="mt-8 bg-blue-50/50 border-blue-100 hidden lg:block">
                <CardContent className="p-6">
                  <Info className="h-6 w-6 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-blue-900 mb-2">Avaliação Individual</h4>
                  <p className="text-sm text-blue-800/80 mb-4">
                    As informações aqui apresentadas são educativas. A indicação de qualquer
                    procedimento depende de consulta médica.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="lg:w-2/3">
            {Object.keys(filteredFaqs).length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>Nenhuma dúvida encontrada para "{searchQuery}".</p>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery('')}
                  className="text-secondary mt-2"
                >
                  Limpar busca
                </Button>
              </div>
            ) : (
              <div className="space-y-10">
                {Object.entries(filteredFaqs).map(([category, faqs], catIndex) => (
                  <div
                    key={category}
                    className="animate-slide-up"
                    style={{ animationFillMode: 'both', animationDelay: `${catIndex * 100}ms` }}
                  >
                    <h2 className="text-2xl font-serif font-semibold text-primary mb-6 border-b border-border pb-2">
                      {category}
                    </h2>
                    <Accordion type="multiple" className="w-full space-y-4">
                      {faqs.map((faq, index) => {
                        const showCta = (index + 1) % 4 === 0
                        return (
                          <div key={faq.id}>
                            <AccordionItem
                              value={faq.id}
                              className="bg-white border border-border/50 rounded-xl px-6 data-[state=open]:shadow-soft transition-all overflow-hidden"
                            >
                              <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary hover:no-underline py-5">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>

                            {/* Intermittent CTA Block */}
                            {showCta && (
                              <div className="mt-4 mb-4 p-6 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                                <div>
                                  <h4 className="font-semibold text-teal-900">
                                    Ainda tem dúvidas sobre este procedimento?
                                  </h4>
                                  <p className="text-sm text-teal-800/70 mt-1">
                                    Fale com nossa equipe técnica via WhatsApp para esclarecimentos
                                    rápidos.
                                  </p>
                                </div>
                                <Button className="shrink-0 bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                                  <MessageCircle className="mr-2 h-4 w-4" /> Suporte Clínico
                                </Button>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
