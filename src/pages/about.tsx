import { NextPage } from 'next'
import Head from '~/components/Head'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const About: NextPage = () => {
  return (
    <>
      <Head title="about" />
      <Container>
        <h1>About</h1>
        <h2>my profile</h2>
        <Table responsive >
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
        </Table>
      </Container>
    </>
  )
}

export default About
