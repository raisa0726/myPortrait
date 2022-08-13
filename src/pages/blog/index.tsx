import Head from '~/components/Head'
import { NextPage } from 'next'
import Link from "next/link"
import { client } from "~/libs/client"
import { Article, Contents } from '~/types'
import Container from 'react-bootstrap/Container';


type Props = {
  articles: Article[]
}

const IndexBlog: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head title="記事一覧" />
      <Container>
        <h1>記事一覧</h1>
        <ul>
          {articles.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
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
