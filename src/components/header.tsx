import { ReactNode } from "react"
import { styled } from "styled-components"

const HeaderWrapper = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`

type HeaderProps = {
  children: ReactNode
}

export const Header = ({
  children,
}: HeaderProps) => {
  return (
    <HeaderWrapper>{children}</HeaderWrapper>
  )
}