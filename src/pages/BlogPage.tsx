import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/content'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredPosts =
    activeCategory === 'Todos'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory)

  const featuredPost = BLOG_POSTS[0] // Assuming first is most important

  return (
    <div className="bg-background min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            Instituto Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ciência, inovações tecnológicas e qualidade de vida na jornada contra a obesidade.
          </p>
        </div>

        {/* Featured Article */}
        {activeCategory === 'Todos' && (
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="block group mb-16 animate-fade-in-up delay-100"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[2/1] md:aspect-[3/1]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <Badge className="bg-secondary hover:bg-secondary/80 text-white mb-4">
                  Destaque Clinico
                </Badge>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 max-w-4xl">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Categories Tabs */}
        <div className="mb-10 animate-fade-in-up delay-200">
          <ScrollArea className="w-full whitespace-nowrap">
            <Tabs defaultValue="Todos" onValueChange={setActiveCategory} className="w-full">
              <TabsList className="bg-transparent h-auto p-0 gap-2 w-max border-b border-border rounded-none">
                <TabsTrigger
                  value="Todos"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-foreground"
                >
                  Todos os Artigos
                </TabsTrigger>
                {BLOG_CATEGORIES.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-300">
          {filteredPosts.map((post, idx) => (
            <Link key={idx} to={`/blog/${post.slug}`} className="group h-full">
              <Card className="h-full border-border/40 shadow-sm hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col bg-white">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 text-primary backdrop-blur font-medium"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50 mt-auto">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 font-medium group-hover:text-secondary transition-colors">
                      Ler Artigo <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
