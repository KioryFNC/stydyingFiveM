import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Root = styled.div`
  width: 120rem;
  height: 70vh;
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
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
  }
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
  
  > li:nth-child(1) {
    animation-delay: 0.1s;
  }
  > li:nth-child(2) {
    animation-delay: 0.3s;
  }
  > li:nth-child(3) {
    animation-delay: 0.4s;
  }
  > li:nth-child(4) {
    animation-delay: 0.5s;
  }
  > li:nth-child(5) {
    animation-delay: 0.6s;
  }
  > li:nth-child(6) {
    animation-delay: 0.7s;
  }
  > li:nth-child(7) {
    animation-delay: 0.8s;
  }

  > li {
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    animation: ${fadeInUp} 0.8s ease-in-out forwards;

    > a {
      display: flex;
      width: 100%;
      height: 4rem;
      font-family: 'PuristaBold';
      align-items: center;
      padding: 0 1rem;
      font-size: 1.6rem;
      gap: 1.2rem;
      color: rgba(255, 255, 255, 0.6);
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      > img {
        width: 1.8rem;
        height: 1.8rem;
        filter: brightness(0.7);
        transition: all .3s ease-in-out;
      }

      &.active {
        background: radial-gradient(138.56% 100% at 0% 51.25%, #6523C2 0%, #8237EC 59.77%, #6523C2 100%);
        box-shadow: -2px 4px 8px 0 rgba(0, 0, 0, 0.62);
        color: white; 
        font-weight: bold;

        > img {
          filter: brightness(1.2);
        }
      }
    }
  }
`;


export const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['border']};
  background: radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.02) 100%);

  > h1 {
    font-family: 'PuristaBold', sans-serif;
    color: #FFF;
    font-size: 1.8rem;
    text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
  }

  > button {
    font-family: 'PuristaSemiBold';
    width: 9.4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    gap: .6rem;
    border-radius: 4px;
    border: none;
    background: linear-gradient(90deg, #D44 0%, #772525 100%);
    color: #FFF;

    > img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`
export const Content = styled.main`
  grid-area: content;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`