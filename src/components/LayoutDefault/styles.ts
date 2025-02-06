import styled from "styled-components";

export const Root = styled.div`
  width: 120rem;
  height: 70rem;
  grid-template-columns: 21.2rem 1fr;
  grid-template-rows: 5rem 1fr;
  display: grid;
  grid-template-areas: 
    "navigation header header"
    "navigation content content"
  ;
  padding: 1.4rem;
  gap: 1rem;
  background: ${(props) => props.theme['background']};
`

export const Navigation = styled.ul`
  grid-area: navigation;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21.2rem;
  height: 100%;
  background: purple;
`
export const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 5rem;
  background: orange;
`
export const Content = styled.main`
  grid-area: content;
  width: 100%;
  height: 100%;
  background: yellow;
`