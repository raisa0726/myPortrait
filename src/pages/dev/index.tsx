import Head from '~/components/Head'
import { NextPage } from 'next'
import Link from "next/link"

const IndexDev: NextPage<Props> = ({  }) => {
  return (
    <>
      <Head title="tailwind preview" />
      <div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      </div>
    </>
  )
}

export default IndexDev
