import { ReactNode } from "react"
import { styled } from "styled-components"

type WrapperNode = {
  children: ReactNode
}

const StyledHeader = styled.header`
  grid-area: header;
`

const Header = ({children}: WrapperNode) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)

const StyledSidebar = styled.aside`
  grid-area: sidebar;
`

const Sidebar = ({children}: WrapperNode) => (
  <StyledSidebar>
    {children}
  </StyledSidebar>
)

const StyledBody = styled.main`
  grid-area: body;
`

const Body = ({children}: WrapperNode) => (
  <StyledBody>
    {children}
  </StyledBody>
)

const StyledFooter = styled.footer`
  grid-area: footer;
`

const Footer = ({children}: WrapperNode) => (
  <StyledFooter>
    {children}
  </StyledFooter>
)

const MainLayout = styled.div`
  height: 100dvh;
  width: 100%;
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar body"
    "footer footer";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
`
const Main = ({children}: WrapperNode) => <MainLayout>{children}</MainLayout>


export const Layout = {
  Main,
  Header,
  Sidebar,
  Body,
  Footer,
}