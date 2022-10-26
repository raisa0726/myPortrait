import type { NextPage } from 'next'
import React from 'react';
import styled from 'styled-components'
import Head from '~/components/Head'

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
      <div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <div className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          <span className="sr-only">Welcome to Raisa's site!</span>
          <a>このサイトはRaisaに関することをまとめています。</a>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='mt-5 sm:px-0'>
              <h3>feature</h3>
              <p className='block rounded-md px-3 py-2 text-base font-medium text-gray-700'>より多くの情報を掲載していきます。</p>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className='mt-5 sm:px-0'>
            <h3>My Twitter</h3>
            <TwitterArea>
              <a className="twitter-timeline"
                data-lang="ja"
                data-theme="dark"
                data-chrome="noheader nofooter"
                data-height="400"
                href="https://twitter.com/SC_Raisa?ref_src=twsrc%5Etfw" />
              </TwitterArea>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
