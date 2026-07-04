import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import NotFound from './NotFound'
import { useRealtime } from '@/hooks/use-realtime'
import {
  getBlogPostBySlug,
  getBlogPosts,
  getAvatarUrl,
  formatDate,
  type BlogPostRecord,
} from '@/services/blog'

const fallbackImg = 'https://img.usecurling.com/p/1200/600?q=medical%20article'
const fallbackAvatar = 'https://img.usecurling.com/ppl/medium?gender=male&seed=doctor'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostRecord | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostRecord[]>([])
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    if (!slug) return
    try {
      const p = await getBlogPostBySlug(slug)
      setPost(p)
      const all = await getBlogPosts()
      setRelatedPosts(all.filter((r) => r.category === p.category && r.slug !== p.slug).slice(0, 3))
    } catch (e) {
      console.error('Failed to load blog post:', e)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    setLoading(true)
    loadData()
  }, [loadData])
  useRealtime('blog_posts', () => {
    loadData()
  })

  useEffect(() => {
    if (!post) return
    document.title = post.title
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    if (post.meta_description) setMeta('description', post.meta_description)
    return () => {
      document.title = 'Instituto Dr. Fábio Miranda Ribeiro'
    }
  }, [post])

  if (loading) {
    return (
      <div className="bg-background min-h-screen pb-20">
        <Skeleton className="w-full h-[50vh] min-h-[400px]" />
        <div className="container px-4 mx-auto max-w-4xl mt-[-40px] relative z-10">
          <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-soft p-8 md:p-14 border border-border/50">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-10 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-2/3 mb-4" />
          </div>
        </div>
      </div>
    )
  }

  if (!post) return <NotFound />

  const author = post.expand?.author
  const authorName = author?.name || 'Dr. Fábio Miranda Ribeiro'
  const authorAvatar = author ? getAvatarUrl(author) : ''

  return (
    <article className="bg-background min-h-screen pb-20 animate-fade-in">
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px]">
        <img
          src={post.featured_image_url || fallbackImg}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <Badge className="bg-secondary hover:bg-secondary text-white mb-6 px-4 py-1 text-sm rounded-full">
              {post.expand?.category?.name || 'Blog'}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80 font-medium text-sm">
              <span>{formatDate(post.created)}</span>
              {post.read_time && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {post.read_time}
                </span>
              )}
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

          {post.scientific_citation && (
            <div className="my-8 p-6 bg-muted border-l-4 border-secondary rounded-r-md">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <div>
                  <strong className="text-primary font-serif block mb-1">
                    Referência Científica
                  </strong>
                  <p className="text-sm text-muted-foreground">{post.scientific_citation}</p>
                </div>
              </div>
            </div>
          )}

          <Separator className="my-12" />

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

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start border border-slate-100">
            <img
              src={authorAvatar || fallbackAvatar}
              alt={authorName}
              className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-white"
            />
            <div className="text-center md:text-left">
              <h4 className="font-serif font-bold text-xl text-primary mb-1">{authorName}</h4>
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

      {relatedPosts.length > 0 && (
        <div className="container px-4 mx-auto max-w-6xl mt-24">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-l-4 border-secondary pl-4">
            Artigos Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                <div className="overflow-hidden rounded-xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.featured_image_url || fallbackImg}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="font-serif font-semibold text-lg text-primary mb-2 group-hover:text-secondary line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-auto">
                      {formatDate(related.created)}
                    </p>
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
