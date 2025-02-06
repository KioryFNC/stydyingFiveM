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
  border-radius: 6px;
  background: ${(props) => props.theme['background']};
`

export const Navigation = styled.div`
  grid-area: navigation;
  width: 21.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['border']};
  background: radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.01) 100%);
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    > strong {
      font-size: 1.5rem;
      font-weight: 700;
      color: #FFF;
    }
    
    > span {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.49);
    }
  }
`

export const Routes = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .6rem;

  > li {
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.6rem;
    gap: 1.2rem;
    color: #FFF;
    border-radius: 6px;
    background: radial-gradient(138.56% 100% at 0% 51.25%, #6523C2 0%, #8237EC 59.77%, #6523C2 100%);
    box-shadow: -2px 4px 8px 0 rgba(0, 0, 0, 0.62);

    > img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
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
  background: green;
`