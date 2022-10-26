import Head from '~/components/Head'
import { NextPage } from 'next'
import Link from "next/link"
import { client } from "~/libs/client"
import { Article, Contents } from '~/types'


type Props = {
  articles: Article[]
}

const IndexBlog: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head title="記事一覧" />
      <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900'>記事一覧</h1>
      </div>
      <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='h-96 rounded-lg border-4 border-dashed border-gray-200'>
        <ul>
          {articles.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
            </ul>
            </div>
          </div>
      </div>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: "blog" });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default IndexBlog
