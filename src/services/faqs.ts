import pb from '@/lib/pocketbase/client'

export interface FaqCategoryRecord {
  id: string
  name: string
  order: number
  created: string
  updated: string
}

export interface FaqRecord {
  id: string
  category: string
  question: string
  answer: string
  order: number
  created: string
  updated: string
  expand?: { category: FaqCategoryRecord }
}

export const getFaqCategories = (): Promise<FaqCategoryRecord[]> =>
  pb.collection('faq_categories').getFullList({ sort: 'order' })

export const getFaqs = (): Promise<FaqRecord[]> =>
  pb.collection('faqs').getFullList({ sort: 'order', expand: 'category' })

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}
