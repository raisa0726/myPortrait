export type Article = {
  id: string
  created_at: string
  updated_at: string
  published_at: string
  revised_at: string
  title: string
  body: string
}

export type Contents = {
  contents: Article[]
}
