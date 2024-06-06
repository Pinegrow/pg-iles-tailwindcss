import type { Document, PageComponent } from 'iles'
import { computed } from 'vue'

export interface Post extends PageComponent {
  date: Date
  author: string
  title: string
  twitter: string
}

function byDate(a: Document<Post>, b: Document<Post>) {
  return Number(new Date(b.date)) - Number(new Date(a.date))
}

export function getPosts() {
  const posts = useDocuments<Post>('~/content')
  return computed(() => posts.value.sort(byDate))
}

export function getPost(slug: string): Post {
  const posts = getPosts()
  return posts.value.find((post) => post.href === slug)
}
