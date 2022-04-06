import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { VFC } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  height: 1em;
  border-top: 1px solid #eaeaea;
  justify-content: space-around;
  align-items: center;
`



const Header: VFC = () => {
  return(
    <HeaderWrapper>
      <h1>Raisa's blog</h1>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header
