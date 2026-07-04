import pb from '@/lib/pocketbase/client'

export interface BlogCategoryRecord {
  id: string
  name: string
  slug: string
  order: number
  created: string
  updated: string
}

export interface UserRecord {
  id: string
  name: string
  avatar: string
  created: string
  updated: string
}

export interface BlogPostRecord {
  id: string
  title: string
  slug: string
  content: string
  category: string
  author: string
  featured_image_url: string
  scientific_citation: string
  meta_description: string
  read_time: string
  excerpt: string
  created: string
  updated: string
  expand?: {
    category: BlogCategoryRecord
    author: UserRecord
  }
}

export const getBlogCategories = (): Promise<BlogCategoryRecord[]> =>
  pb.collection('blog_categories').getFullList({ sort: 'order' })

export const getBlogPosts = (): Promise<BlogPostRecord[]> =>
  pb.collection('blog_posts').getFullList({ sort: '-created', expand: 'category,author' })

export const getBlogPostBySlug = (slug: string): Promise<BlogPostRecord> =>
  pb.collection('blog_posts').getFirstListItem(`slug = "${slug}"`, {
    expand: 'category,author',
  })

export function getAvatarUrl(user: UserRecord): string {
  if (!user?.avatar) return ''
  return `${import.meta.env.VITE_POCKETBASE_URL}/api/files/users/${user.id}/${user.avatar}`
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
