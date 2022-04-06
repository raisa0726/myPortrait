import { VFC } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`

const Footer: VFC = () => {
  return <FooterWrapper>©️ Shirai Chisato</FooterWrapper>
}

export default Footer
