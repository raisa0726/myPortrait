import { NextPage } from 'next'
import Head from '~/components/Head'

const About: NextPage = () => {
  return (
    <>
      <Head title="about" />
      <div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
        <h1>About</h1>
        <h2>my profile</h2>
        <div className=''>
          <table>
            <thead>
              <tr>
                <th>topic</th>
                <th>about me</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>Shirai Chisato</td>
              </tr>
              <tr>
                <td>Handle Name</td>
                <td>Raisa</td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>game(ff14 and phone game), drawing</td>
              </tr>
              <tr>
                <td>Hometown</td>
                <td>Kanazawa, Ishikawa, Japan</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td>July 26</td>
              </tr>
              <tr>
                <td>Blood type</td>
                <td>O+</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>female</td>
              </tr>
              <tr>
                <td>Studies</td>
                <td>Computer Science in Kanazawa Institute of University </td>
              </tr>
              <tr>
                <td>junior high school / high school</td>
                <td>Kanazawa Nishikigaoka </td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default About
