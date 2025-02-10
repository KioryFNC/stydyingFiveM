import styled from "styled-components";

export const Action = styled.div`
  position: relative;
  width: auto;
  min-height: 11.1rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['border']};
  background: radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.02) 100%);

  img:first-child {
    position: absolute;
    left: 1rem; 
    top: 50%;
    transform: translateY(-50%); 
    width: 10rem;
    height: 10rem;
    object-fit: contain;
  }

  img:last-child {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: .8rem;
    right: .8rem;
  }
`

export const Texts = styled.div`
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  gap: .6rem;

  > span {
    font-family: 'PuristaSemiBold', sans-serif;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.60);
  }

  > button {
    width: 11.9rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'PuristaSemiBold', sans-serif;
    font-size: 1.5rem;
    border-radius: 4px;
    color: white;
    border: 1px solid #8237EC;
    background: radial-gradient(138.56% 100% at 0% 51.25%, #6523C2 0%, #8237EC 59.77%, #6523C2 100%);
    box-shadow: 0px 4px 23.9px 0px rgba(130, 55, 236, 0.50);
  }
`