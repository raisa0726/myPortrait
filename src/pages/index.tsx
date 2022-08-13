import type { NextPage } from 'next'
import React from 'react';
import styled from 'styled-components'
import Head from '~/components/Head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwitterArea = styled.div`
  margin: 5px;
`

const Home: NextPage = () => {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <>
      <Head title="home" />
      <Container>
        <Row>
          <h2>Welcome to Raisa's site!</h2>
          <a>このサイトはRaisaに関することをまとめています。</a>
        </Row>
        <Row>
          <Col sm={8}>
            <Row>
              <h3>feature</h3>
              <a>より多くの情報を掲載していきます。</a>
            </Row>
          </Col>
          <Col sm={4}>
            <h3>My Twitter</h3>
            <TwitterArea>
              <a className="twitter-timeline"
                data-lang="ja"
                data-theme="dark"
                data-chrome="noheader nofooter"
                data-height="400"
                href="https://twitter.com/SC_Raisa?ref_src=twsrc%5Etfw" />
            </TwitterArea>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
