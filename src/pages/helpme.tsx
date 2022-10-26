import { VFC } from 'react'
import Head from '~/components/Head'

const HelpMe: VFC = () => {
  return (
    <>
      <Head title="helpme" />
      <div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <h1>about my help mark</h1>
        <a>私は以下の治療を行っています</a>
        <ul>
          <li>双極性感情障害</li>
          <li>ナルコレプシー</li>
        </ul>
        <a>以下の症状を見かけたら、安静にできる場所で休ませてください</a>
        <ul>
          <li>過呼吸</li>
          <li>突然泣き始める/泣いている/泣きそう</li>
          <li>だるそうにしている</li>
        </ul>
      </div>
    </>
  )
}

export default HelpMe
