import { NextPage } from "next";
import { client } from "~/libs/client";
import { Article, Contents } from "~/types"
import Head from '~/components/Head'
import Container from 'react-bootstrap/Container';

type Props = {
  blog: Article
}

const ShowBlog: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head title={blog.title} />
      <Container>
        {/* <Link to='./blog'>
        <FontAwesomeIcon icon={faAngleLeft} />
        戻る
      </Link> */}
        <h1>{blog.title}</h1>
        <small>作成日時:{blog.published_at}</small>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </Container>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data: Article = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  }
}

export default ShowBlog
