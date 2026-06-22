import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { BLOG_POSTS } from '@/data/content'
import NotFound from './NotFound'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return <NotFound />
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 3)

  return (
    <article className="bg-background min-h-screen pb-20 animate-fade-in">
      {/* Article Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <Badge className="bg-secondary hover:bg-secondary text-white mb-6 px-4 py-1 text-sm rounded-full">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80 font-medium text-sm">
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-4xl mt-[-40px] relative z-10">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-soft p-8 md:p-14 border border-border/50">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />{' '}
            Voltar para o Blog
          </Link>

          {/* E-E-A-T Content Area */}
          <div
            className="prose prose-lg prose-slate max-w-none font-sans
              prose-headings:font-serif prose-headings:text-primary 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:text-primary/80
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-12" />

          {/* Social Share */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <span className="font-semibold text-primary flex items-center gap-2">
              <Share2 className="h-5 w-5 text-secondary" /> Compartilhe
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-blue-600 border-blue-100 hover:bg-blue-50"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-sky-500 border-sky-100 hover:bg-sky-50"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-blue-700 border-blue-100 hover:bg-blue-50"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Author Box */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start border border-slate-100">
            <img
              src="https://img.usecurling.com/ppl/medium?gender=male&seed=doctor"
              alt="Dr. Fábio Miranda Ribeiro"
              className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-white"
            />
            <div className="text-center md:text-left">
              <h4 className="font-serif font-bold text-xl text-primary mb-1">
                Dr. Fábio Miranda Ribeiro
              </h4>
              <p className="text-sm font-medium text-secondary mb-3">
                Diretor Técnico | CRM-RJ 520111398-4
              </p>
              <p className="text-sm text-muted-foreground">
                Especialista em endoscopia bariátrica, dedica-se ao tratamento inovador da
                obesidade, promovendo o Método 360 para um emagrecimento sustentável e focado na
                saúde metabólica integral.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="container px-4 mx-auto max-w-6xl mt-24">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-l-4 border-secondary pl-4">
            Artigos Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.slug} to={`/blog/${related.slug}`} className="group">
                <div className="overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-serif font-semibold text-lg text-primary mb-2 group-hover:text-secondary line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-auto">{related.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
